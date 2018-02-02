//this file sets the window variable, validScores, based on which composers are checked, and which genres have been selected

// Rework for this code: Make it so when a composer checkbox is selected, just add their name to an array. 
// After their name is added then perform the ajax call with all composers in the arr checked against all the genres. 

let selectedComposers = [];
const composerChecks = $(".composer");

function setSelectedComposers(){
	for(let i = 0; i < composerChecks.length; i++){
		$(composerChecks[i]).change(function(){
			if($(this).is(":checked")){
				selectedComposers.push($(composerChecks[i]).attr("name"));
				// console.log(selectedComposers);
			} else {
				selectedComposers = selectedComposers.filter((name) => {
					return !(name === $(composerChecks[i]).attr("name"));
				})
				// console.log(selectedComposers);
			}
		})

	}
}

setSelectedComposers();










// const allCheckboxes = $(".check");
// for(let i = 0; i < allCheckboxes.length; i++){
// 	allCheckboxes[i].addEventListener("click", function(){
// 		// fetchValidWorks()
// 		validWorks = [];
// 		for(composer of selectedComposers){
// 			composerJSON = URL + composer + ".json";
// 			console.log(composerJSON);
// 		}
// 	})
// }

// function fetchValidWorks(){
// 	validWorks = [];
// 	for(composer of selectedComposers){
// 		composerJSON = URL + composer + ".json";
// 		chkBxRequest.open("GET", composerJSON);
// 		chkBxRequest.onload = function() {
// 			data = JSON.parse(chkBxRequest.reponseText);
// 			console.log(data);
// 		}
// 	}
// }


// const checkbox = $(".composer");










// function loadValidWorks(){
// 	for(let i = 0; i < checkbox.length; i++){	
// 		checkbox[i].addEventListener("change", function(){
// 			composerJSON = URL + $(checkbox[i]).attr("name") + ".json";
// 			chkBxRequest.open("GET", composerJSON);
			
// 			if($(this).is(":checked")){ //if checkbox is clicked, add all those scoreObjs to the validWorks array
// 				chkBxRequest.onload = function() {
// 					data = JSON.parse(chkBxRequest.responseText);
// 					data.forEach((scoreObj) => {
// 						if (selectedTags.length === 0 && !validWorks.includes(scoreObj)){ //if no genres specified, add all works to validWorks
// 							validWorks.push(scoreObj);
// 						}
// 						for(genre of selectedTags){
// 							if(scoreObj.tags.includes(genre) && selectedTags.length > 0){
// 								validWorks.push(scoreObj)
// 							}
// 						}
// 					})
// 				}	
// 			} else { //if checkbox not clicked, filter out any works by that composer.
// 				chkBxRequest.onload = function() {
// 					data = JSON.parse(chkBxRequest.responseText);
// 					validWorks = validWorks.filter((scoreObj) => {
// 						return !(scoreObj.composer === data[0].composer)
// 					})
// 				}
// 			}
			
// 			chkBxRequest.send();
// 		});
// 	}	
// }

// loadValidWorks();
