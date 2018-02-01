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

	// "byrd" : {
	// 	"name" : "byrd",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Byrd%2C%20William&customcat=ccperson1"]
	// },

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
	// }/*,*/
// ========== BAROQUE ========== 

	"caccini" : {
		"name" : "caccini",
		"chart" : ["http://imslp.org/index.php?title=Category:Caccini%2C%20Giulio&customcat=ccperson1"]
	},

	"gabrieli" : {
		"name" : "gabrieli",
		"chart" : ["http://imslp.org/index.php?title=Category:Gabrieli%2C%20Giovanni&customcat=ccperson1"]
	},

	"monteverdi" : {
		"name" : "monteverdi",
		"chart" : ["http://imslp.org/index.php?title=Category:Monteverdi%2C%20Claudio&customcat=ccperson1"]
	},

	"frescobaldi" : {
		"name" : "frescobaldi",
		"chart" : ["http://imslp.org/index.php?title=Category:Frescobaldi%2C%20Girolamo&customcat=ccperson1"]
	},

	"schutz" : {
		"name" : "schutz",
		"chart" : ["http://imslp.org/index.php?title=Category:Sch%C3%BCtz%2C%20Heinrich&customcat=ccperson1"]
	},

	"lully" : {
		"name" : "lully",
		"chart" : ["http://imslp.org/index.php?title=Category:Lully%2C%20Jean-Baptiste&customcat=ccperson1"]
	},

	"corelli" : {
		"name" : "corelli",
		"chart" : ["http://imslp.org/index.php?title=Category:Corelli%2C%20Arcangelo&customcat=ccperson1"]
	},

	"purcell" : {
		"name" : "purcell",
		"chart" : ["http://imslp.org/index.php?title=Category:Purcell%2C%20Henry&customcat=ccperson1"]
	},

	"ascarlatti" : {
		"name" : "ascarlatti",
		"chart" : ["http://imslp.org/index.php?title=Category:Scarlatti%2C%20Alessandro&customcat=ccperson1"]
	},

	"couperin" : {
		"name" : "couperin",
		"chart" : ["http://imslp.org/index.php?title=Category:Couperin%2C%20Fran%C3%A7ois&customcat=ccperson1"]
	},

	"vivaldi" : {
		"name" : "vivaldi",
		"chart" : ["http://imslp.org/index.php?title=Category:Vivaldi%2C%20Antonio&customcat=ccperson1"]
	},

	"telemann" : {
		"name" : "telemann",
		"chart" : ["http://imslp.org/index.php?title=Category:Telemann%2C%20Georg%20Philipp&customcat=ccperson1"]
	},

	"rameau" : {
		"name" : "rameau",
		"chart" : ["http://imslp.org/index.php?title=Category:Rameau%2C%20Jean-Philippe&customcat=ccperson1"]
	},

	"handel" : {
		"name" : "handel",
		"chart" : ["http://imslp.org/index.php?title=Category:Handel%2C%20George%20Frideric&customcat=ccperson1"]
	},

	"dscarlatti" : {
		"name" : "dscarlatti",
		"chart" : ["http://imslp.org/index.php?title=Category:Scarlatti%2C%20Domenico&customcat=ccperson1"]
	},

	"jsbach" : {
		"name" : "jsbach",
		"chart" : ["http://imslp.org/index.php?title=Category:Bach%2C%20Johann%20Sebastian&customcat=ccperson1"]
	},

	"pergolesi" : {
		"name" : "pergolesi",
		"chart" : ["http://imslp.org/index.php?title=Category:Pergolesi%2C%20Giovanni%20Battista&customcat=ccperson1"]
	}/*,*/

// ========== CLASSICAL ========== 
	// "gluck" : {
	// 	"name" : "gluck",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Gluck%2C%20Christoph%20Willibald&customcat=ccperson1"]
	// },

	// "cpebach" : {
	// 	"name" : "cpebach",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Bach%2C%20Carl%20Philipp%20Emanuel&customcat=ccperson1"]
	// },

	// "haydn" : {
	// 	"name" : "haydn",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Haydn%2C%20Joseph&customcat=ccperson1"]
	// },

	// "stamitz" : {
	// 	"name" : "stamitz",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Stamitz%2C%20Carl%20Philipp&customcat=ccperson1"]
	// },

	// "mozart" : {
	// 	"name" : "mozart",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Mozart%2C%20Wolfgang%20Amadeus&customcat=ccperson1"]
	// },
	
	// "beethoven" : {
	// 	"name" : "beethoven",
	// 	"chart" : ["http://imslp.org/index.php?title=Category:Beethoven%2C%20Ludwig%20van&customcat=ccperson1"]
	// },
// ========== ROMANTIC ========== 

// ========== 20th Century ========== 


	
	
	
	
	
	
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