const composers = {
// ========== EARLY MUSIC ========== 
	// "perotin" : {
	// 	"name" : "perotin",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:P%C3%A9rotin&customcat=ccperson1"]
	// },

	// "devitry" : {
	// 	"name" : "devitry",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Vitry%2C%20Philippe%20de&customcat=ccperson1"]
	// },

	// "machaut" : {
	// 	"name" : "machaut",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Machaut%2C%20Guillaume%20de&customcat=ccperson1"]
	// },

	// "dunstable" : {
	// 	"name" : "dunstable",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Dunstaple%2C%20John&customcat=ccperson1"]
	// }, 

	// "dufay" : {
	// 	"name" : "dufay",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Dufay%2C%20Guillaume&customcat=ccperson1"]
	// },

	// "binchois" : {
	// 	"name" : "binchois",
	// 	"chart": ["http://imslp.org/index.php?title=Category:Binchois%2C%20Gilles&customcat=ccperson1"]
	// }, 

	// "ockeghem" : {
	// 	"name" : "ockeghem",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Ockeghem%2C%20Johannes&customcat=ccperson1"]
	// },

	// "josquin" : {
	// 	"name" : "josquin",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Josquin%20Desprez&customcat=ccperson1"]
	// }, 

	// "taverner" : {
	// 	"name" : "taverner",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Taverner%2C%20John&customcat=ccperson1"]
	// }, 

	// "tallis" : {
	// 	"name" : "tallis",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Tallis%2C%20Thomas&customcat=ccperson1"]
	// },

	// "palestrina" : {
	// 	"name" : "palestrina",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Palestrina%2C%20Giovanni%20Pierluigi%20da&customcat=ccperson1"]
	// },

	// "lassus" : {
	// 	"name" : "lassus",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Lassus%2C%20Orlande%20de&customcat=ccperson1"]
	// }, 

	"byrd" : {
		"name" : "byrd",
		"chart" : ["http://imslp.org/index.php?title=Category:Byrd%2C%20William&customcat=ccperson1"]
	}/*,*/

	// "victoria" : {
	// 	"name" : "victoria",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Victoria%2C%20Tom%C3%A1s%20Luis%20de&customcat=ccperson1"]
	// }, 

	// "morley" : {
	// 	"name" : "morley",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Morley%2C%20Thomas&customcat=ccperson1"]
	// }, 

	// "dowland" : {
	// 	"name" : "dowland",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Dowland%2C%20John&customcat=ccperson1"]
	// }, 

	// "gesualdo" : {
	// 	"name" : "gesualdo",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Gesualdo%2C%20Carlo&customcat=ccperson1"]
	// }, 

	// "praetorius" : {
	// 	"name" : "praetorius",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Praetorius%2C%20Michael&customcat=ccperson1"]
	// },

	// "weelkes" : {
	// 	"name" : "weelkes",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Weelkes%2C%20Thomas&customcat=ccperson1"]
	// }, 

	// "gibbons" : {
	// 	"name" : "gibbons",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Gibbons%2C%20Orlando&customcat=ccperson1"]
	// }
// ========== BAROQUE ========== 

// ========== CLASSICAL ========== 

// ========== ROMANTIC ========== 

// ========== 20th Century ========== 


	// "beethoven" : {
	// 	"name" : "beethoven",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Beethoven%2C%20Ludwig%20van&customcat=ccperson1"]
	// },
	
	// "mozart" : {
	// 	"name" : "mozart",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Mozart%2C%20Wolfgang%20Amadeus&customcat=ccperson1"]
	// },
	
	// "haydn" : {
	// 	"name" : "haydn",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Haydn%2C%20Joseph&customcat=ccperson1"]
	// },
	
	// "jsBach" : {
	// 	"name" : "J.S_Bach",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Bach%2C%20Johann%20Sebastian&customcat=ccperson1"]
	// },
	
	// "schubert" : {
	// 	"name" : "schubert",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Schubert%2C%20Franz&customcat=ccperson1"]
	// }, 
	
	// "mahler" : {
	// 	"name" : "mahler",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Mahler%2C%20Gustav&customcat=ccperson1"]
	// },

	// "schumann" : {
	// 	"name" : "schumann",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Schumann%2C%20Robert&customcat=ccperson1"]
	// }
}

module.exports = composers;