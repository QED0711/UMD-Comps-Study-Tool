const request = require("request");
const cheerio = require("cheerio");

function returnBody(url) {
//given a url, returns to the body to be processed by cheerio.
	return new Promise(function(resolve){
		request(url, {timeout: 10000}, function(error, response, body){
			if(error){
				console.error(error);
			}
			resolve(body);
		});
	});
} 

async function returnLinksFromCurrentChart(url){
	const body = await returnBody(url);
	const $ = cheerio.load(body);
	let linkCollection = [];
	const links = $("#mw-pages").first().find(".categorypagelink");
	for(let i = 0; i < links.length; i++){
		linkCollection.push(links[i]["attribs"]["href"]);
	}
	return linkCollection;
}

async function returnComposerFromChartPage(url){
	const body = await returnBody(url);
	const $ = cheerio.load(body);
	
	const composer = $("h1#firstHeading")[0]["children"][0]["data"].trim().split(":")[1];
	return composer;
}

async function returnNumOfWorkPages(url){
	const body = await returnBody(url);
	const $ = cheerio.load(body);

	const paragraph = $("div#mw-pages p")[0]["children"][2]["data"];
	const totalNumOfWorks = parseInt(paragraph.split(" ")[paragraph.split(" ").length - 2]);

	return Math.ceil(totalNumOfWorks/200);
}

async function returnNext200Link(url){
	const body = await returnBody(url);
	const $ = cheerio.load(body);

	const chartSegment = $("a.categorypaginglink");
	for(let i = 0 ; i < chartSegment.length; i++){
		if(chartSegment[i]["children"][0]["data"].match("next 200") /*&& !composerArr.includes("http://imslp.org" + chartSegment[i]["attribs"]["href"])*/){
			return ("http://imslp.org" + chartSegment[i]["attribs"]["href"]);
		}	
	}
}

async function returnPopulatedComposerArr(composerArr){ // ***LEAVE OFF FROM HERE*** (this is working, so use this in next step)
	const numOfWorkPages = await returnNumOfWorkPages(composerArr[composerArr.length-1]);
	while(composerArr.length < numOfWorkPages){
		let next200 = await returnNext200Link(composerArr[composerArr.length-1]);
		composerArr.push(next200);
	}
	return composerArr;
}

async function returnAllWorkLinks(composerArr){
	const populatedComposerArr = await returnPopulatedComposerArr(composerArr);
	let links = []
	for(let i = 0; i < populatedComposerArr.length; i++){
		let currentLinkCollection = await returnLinksFromCurrentChart(composerArr[i]);
		for(link of currentLinkCollection){
			if(link){
				links.push("http://imslp.org" + link);	
			}
		}	
	}
	return links;
}

function getTitleFromWorkPage($){
	return $(".firstHeading")[0]["children"][0]["data"].trim().split(" (")[0];	
}

function getComposerFromWorkPage($){
	return $(".firstHeading")[0]["children"][0]["data"].trim().split(" (")[1].split(")")[0];	
}

function getValidTagsFromWorkPage($){
	const tags =  $(".wp_header td .plainlinks a");
	let validTags = [];
	for(let i = 0; i < tags.length; i++){
		let tag = tags[i]["children"][0]["data"];
		if(/(arr)/.test(tag)) break;
		if(!/player/.test(tag) && !/without/.test(tag) && !/Scores featuring/.test(tag) && !/language/.test(tag)){
			validTags.push(tags[i]["children"][0]["data"]);
			
		}
	}
	return validTags;
}

function getDateFromWorkPage($){
	const date = $(".wp_header td")
	// console.log(date);
	for(let i = 0; i < date.length; i++){
		for(node of date[i].children){
			if(node.type === "text" && node.data.match(/\d+/g) && node.data.match(/\d+/g)[0] > 1000){
				return node.data.match(/\d+/g)[0]
			}
		}
	}
	return "N/A";
}

function getValidScoresFromWorkPage($){
	const scoreDiv = $("#tabScore1 a");
  	let validScores = [];

  	for(index in scoreDiv){
    	if(scoreDiv[index]['children'] && scoreDiv[index]['children'][0] && scoreDiv[index]['children'][0]['children'] && scoreDiv[index]['children'][0]['children'][1] && scoreDiv[index]['children'][0]['children'][1]['data']){
    	let scoreLinks = scoreDiv[index]['children'][0]['children'][1]['data'] // updated version of scoreLinks
      		if(/(((complete|full) score)|([XVI]+\.?)|(\d+\.))/gi.test(scoreLinks) && !/(part)|(cover)/gi.test(scoreLinks)){ // change here 
        		validScores.push(scoreDiv[index]['attribs']['href']);
      		}
    	}
	}
	return validScores;
}

async function getDataFromWorkPage(url){
	const body = await returnBody(url);
	const $ = cheerio.load(body);

	const title = getTitleFromWorkPage($)
	const composer = getComposerFromWorkPage($);
	const validTags = getValidTagsFromWorkPage($);
	const date = getDateFromWorkPage($);
	const scores = getValidScoresFromWorkPage($);
	
	return {"composer" : composer, "title" : title, "date" : date, "tags" : validTags, "scores" : scores};
}

async function imslpCrawler(composerArr){
	console.log("Crawler Initializing... \n");
	const composer = await returnComposerFromChartPage(composerArr[0]);

	console.log(`searching for works by ${composer.toUpperCase()}`)

	const workLinks = await returnAllWorkLinks(composerArr);
	let workCount = 0;

	console.log(`\nFound ${workLinks.length} Work Links\n\nGathering Work Data...`);

	let linkData, workData = [];
	for(link of workLinks){
		try {
			// console.log(link);
			linkData = await getDataFromWorkPage(link);	
		} catch(err){
			console.log("Error Retreiving Page")
			workCount++;
			linkData = null;
		}
		if (linkData === null){
			continue;
		} 
		
		if(linkData["scores"].length > 0 && linkData["composer"] === composer){
			workCount++;
			console.log(`\n *** ${workCount} (${((workCount/workLinks.length)*100).toFixed(2)}% complete) *** \n`)
			console.log(linkData);
			workData.push(linkData);
		} else {
			workCount++;
		}
	}
	return workData;
}



module.exports = imslpCrawler;

