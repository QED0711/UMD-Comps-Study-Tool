const submit = $("#submit");
const frame = $("#frame");

let randomScoreObj;
$(submit).click(function(){
	$("h2")[0].innerText = ""
	randomScoreObj = validWorks[randomIndex()];
	let scores = randomScoreObj.scores;
	$(frame).attr("src", randomScoreObj.scores[Math.floor(Math.random() * scores.length)])
})
