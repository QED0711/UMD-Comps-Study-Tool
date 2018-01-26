//this file sets the window variable, validScores, based on which composers are checked, and which genres have been selected


let data
const chkBxRequest = new XMLHttpRequest();

const checkbox = $(".composer");

for(let i = 0; i < checkbox.length; i++){	
	checkbox[i].addEventListener("change", function(){
		composerJSON = URL + $(checkbox[i]).attr("name") + ".json";
		chkBxRequest.open("GET", composerJSON);
		
		if($(this).is(":checked")){ //if checkbox is clicked, add all those scoreObjs to the validWorks array
	
			chkBxRequest.onload = function() {
				data = JSON.parse(chkBxRequest.responseText);
				data.forEach((scoreObj) => {
					if (selectedTags.length === 0 && !validWorks.includes(scoreObj)){ //if no genres specified, add all works to validWorks
						validWorks.push(scoreObj);
					}
					for(genre of selectedTags){
						if(scoreObj.tags.includes(genre) && selectedTags.length > 0){
							validWorks.push(scoreObj)
						}
					}
				})
			}	
		} else { //if checkbox not clicked, filter out any works by that composer.
			chkBxRequest.onload = function() {
				data = JSON.parse(chkBxRequest.responseText);
				validWorks = validWorks.filter((scoreObj) => {
					return !(scoreObj.composer === data[0].composer)
				})
			}
		}
		
		chkBxRequest.send();
	});
}
