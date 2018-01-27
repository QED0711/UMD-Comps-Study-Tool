const allChecks = $(".check");

// let data
const JSONRequest = new XMLHttpRequest();
const workNum = $("#num-of-works");

function arrayIntersect(arr1, arr2){
	for(item1 of arr1){
		for(item2 of arr2){
			if(item1 === item2){
				return true;
			}
		}
	}
	return false;
}



for(let i = 0; i < allChecks.length; i++){
	$(allChecks[i]).click(function(){
		validWorks = [];
		setTimeout(function() {
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
			$(workNum)[0].innerText = `${validWorks.length} Works Found`
		}, 10);

	})
}