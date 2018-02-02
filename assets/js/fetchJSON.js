const allChecks = $(".check");
let tempComposers = 0, tempTags = 0;

const JSONRequest = new XMLHttpRequest();
const workNum = $("#num-of-works");

function arrayIntersect(arr1, arr2){ // compares two arrays to see if there are any common elements.
	for(item1 of arr1){
		for(item2 of arr2){
			if(item1 === item2){
				return true;
			}
		}
	}
	return false;
}

setInterval(function(){ // Every 750 ms, see if the selectedComposers length has changed. if so, ask for a new set of scores. else, do nothing. 
    
    if(selectedComposers.length !== tempComposers || selectedTags.length !== tempTags){
        validWorks = [];    
        selectedComposers.forEach((composer) => {
        composerJSON = URL + composer + ".json";
        JSONRequest.open("GET", composerJSON, false);

        JSONRequest.onload = function(){ // a callback to be called when the request is sent
            data = JSON.parse(JSONRequest.responseText);
            data.forEach((scoreObj) => {
                if(arrayIntersect(scoreObj.tags, selectedTags) || selectedTags.length === 0){
                    validWorks.push(scoreObj);
                }
            })
        }
        if(selectedComposers.length > 0){ 
            // console.log(data)
            JSONRequest.send(); 
        }	
    })
    $(workNum)[0].innerText = `Works matching your selection: ${validWorks.length}`
    tempComposers = selectedComposers.length;
    tempTags = selectedTags.length;
    }    
}, 750)

// for(let i = 0; i < allChecks.length; i++){
// 	$(allChecks[i]).click(function(){
// 		validWorks = [];
// 		setTimeout(function() {
//             console.log("Selected Composers: ", selectedComposers);
// 			selectedComposers.forEach((composer) => {
// 				composerJSON = URL + composer + ".json";
// 				JSONRequest.open("GET", composerJSON, false);

// 				JSONRequest.onload = function(){ // a callback to be called when the request is sent
// 					data = JSON.parse(JSONRequest.responseText);
// 					data.forEach((scoreObj) => {
// 						if(arrayIntersect(scoreObj.tags, selectedTags) || selectedTags.length === 0){
// 							validWorks.push(scoreObj);
// 						}
// 					})
// 				}
// 				if(selectedComposers.length > 0){ 
// 					// console.log(data)
// 					JSONRequest.send(); 
// 				}	
// 			})
// 			$(workNum)[0].innerText = `Works matching your selection: ${validWorks.length}`
// 		}, 5);

// 	})
// }