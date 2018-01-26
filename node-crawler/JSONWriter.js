const crawler = require("./crawlerV3");
const composers = require("./composers");
const fs = require('fs');



let objectShell = {};
async function getScoreObjects(composerName){
	const file = "./jsonFiles/" + composerName + ".json";
	const data = await crawler(composers[composerName].chart);
	const json = JSON.stringify(data);
	// console.log(json);
	if(!fs.existsSync(file)){
	fs.writeFile(file, json);
	console.log("\n\n ======== CONTENTS WRITTEN TO: " + file.toUpperCase() + " ========\n\n");
	} else {
		console.log("\n\n ======== FILE ALREADY EXISTS. NOTHING WRITTEN ========\n\n")
	}
	
};

getScoreObjects("schumann");


//******************************


// const perotinJSON = require("./perotinTest.json");

// console.log(perotinJSON.length);