let selectedTags = [];

const genres = $(".genre");

for(let i = 0; i < genres.length; i++){
	selectedTags.push($(genres[i]).attr("name")) // currently sending all genres. make it so only when the genre is clicked;
}

// genres.forEach((genre) => {
// 	console.log($(genre).attr("name"));
// })