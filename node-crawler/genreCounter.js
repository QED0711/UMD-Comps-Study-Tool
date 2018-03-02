const request = require("request");
const composers = require("./composers");

let genres = {};
let genreArr = [];

function getJSON(composer){
	return new Promise((resolve) => {
		let url = "https://raw.githubusercontent.com/QED0711/UMD-Comps-Study-Tool/master/node-crawler/jsonFiles/" + composer + ".json"
		request(url, (error, response) =>{
			if(error){
				console.log(error);
			}
			resolve(JSON.parse(response.body));
		});	
	})
}

// async function printJSON(composer){ // for test purposes.
// 	let composerObject = await getJSON(composer);
// 	console.log(composerObject);
// }

function objToArray(object){
	for(tag in object){
		genreArr.push([tag, object[tag]]);	
	}
}

async function addToGenres(composer){
	let composerObj = await getJSON(composer);
	console.log(`${composer}.json received.`);
	return new Promise((resolve) => {
		for(entry of composerObj){
			for(tag of entry.tags){
				if(!genres[tag]){
					genres[tag] = 1
				} else {
					genres[tag] = genres[tag] + 1;
				}
			}
		}	
		resolve(genres);
	})
	// objToArray(genres);
}

async function sortGenres(){
	for(composer in composers){
		let tempGenres = await addToGenres(composer);
		console.log(`${composer}.json parsed and sent to "genres"`);
	}
	objToArray(genres); //converts the list genre objects to an array for sorting
	
	genreArr.sort((a, b) => { // sort the array of genres in descending order of occurrances
		return b[1] - a[1];
	})
	
	let filteredGenres = genreArr.filter((tag) => { // checks each tag against a minimum count and sets the result to the new variable, filteredGenres
		return (tag[1] > 100) && (!/scores/i.test(tag[0])) 
	})
	console.log("\n\n\n\n ====================== \n\n\n\n")
	let counter = 0;
	filteredGenres.forEach((tag) => {
		console.log(tag);
	})
}

sortGenres();

// for(composer in composers){
// 	addToGenres(composer);
// }

// setTimeout(function() {
// 	genreArr.sort(function(a, b){
// 		return b[1] - a[1];
// 	})
// 	console.log(genreArr);
// }, 10000);	

// sorting through property values in an object 
// https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
	