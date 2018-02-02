const submit = $("#submit");
const frame = $("#frame");

const answerBtn = $("#showAnswer")[0]
let composer, title, tags, date;
let randomScoreObj;

$(submit).click(function(){ // on click, sets answer fields to balnk, gets a randomScoreObj
	
    window.location.hash = "#banner"
    $("#answer-composer")[0].innerText = ""
    $("#answer-title")[0].innerText = ""
    $("#answer-tags")[0].innerText = ""
    $("#answer-date")[0].innerText = ""
    
    tags = undefined;
    
	randomScoreObj = validWorks[randomIndex()];
    console.log(randomScoreObj);
    composer = randomScoreObj.composer;
    title = randomScoreObj.title;
    date = randomScoreObj.date;
    let tempTags = randomScoreObj.tags;
    tempTags.forEach(function(tag){
        if(!tags){
            tags = tag;
        } else {
            tags += `, ${tag}`
        }
    })
    
	let scores = randomScoreObj.scores;
    
    // $(frame).attr("src", randomScoreObj.scores[Math.floor(Math.random() * scores.length)])    
    // window.location.hash = "#num-of-works"
    window.open(randomScoreObj.scores[Math.floor(Math.random() * scores.length)]);
})

$(answerBtn).click(function(){ // when answer button pressed, sets the text contents of each answer row based on information found in the randomScoreObj
   	$("#answer-composer")[0].innerText = `========== ${composer}`;
   	$("#answer-title")[0].innerText = `============== ${title}`;
    $("#answer-date")[0].innerText = `==== ${date}`;
    $("#answer-tags")[0].innerText = `============ ${tags}`;
})
