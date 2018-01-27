let selectedTags = [];

const genres = $(".genre");

for(let i = 0; i < genres.length; i++){ 
	genres[i].addEventListener("change", function(){
		if($(this).is(":checked")){ // add genre to selectedTags if it is checked
			selectedTags.push($(genres[i]).attr("name"));
		} else { // filter out genre from selectedTags if it is unchecked
			selectedTags = selectedTags.filter((genre) => { 
				return genre !== $(genres[i]).attr("name");
			})
		}
	});
}