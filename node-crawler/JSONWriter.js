const crawler = require("./crawlerV3");
const composers = require("./composers");
const fs = require('fs');



let objectShell = {};
async function getScoreObjects(composerName){
	const file = "./jsonFiles/" + composerName + ".json";
	if(!fs.existsSync(file)){
		const data = await crawler(composers[composerName].chart);
		const json = JSON.stringify(data);	
		fs.writeFile(file, json);
		console.log("\n\n ======== CONTENTS WRITTEN TO: " + file.toUpperCase() + " ========\n\n");	
	} else {
		console.log("\n\n ======== FILE FOR " + composerName.toUpperCase() + " ALREADY EXISTS. NOTHING WRITTEN ========\n\n")
	}
};


// getScoreObjects("beethoven");


for(composer in composers){
	getScoreObjects(composer);	
}	






