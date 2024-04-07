let word;
    // words to use for the spelling
const words = ["accident", "accurate", "actual", "accept","accurate", "adult", "address", "afraid", "answer", "appear", "April", "arrive", "attention", "autumn", "believe", "bicycle", "birthday", "breath", "build", "busy", "business", "calculate", "calendar", "cartoon", "caught", "category", "catalog", "centre","century", "certain", "chocolate", "circle","complete", "communicacte", "consider","continue", "corpse", "computer", "credit", "couch", "current", "decide", "debt", "debit","delicious", "describe","different","difficult","disappear", "dessert", "dream", "early","earth","eight","enough", "exercise", "excited", "exception", "experience","experiment","extreme","famous","favourite", "figure", "forward","Friday","fruit", "general", "generate", "grammar","group","guard","guide", "heard","heart","height","history", "horrizon", "hour","imagine", "image", "increase", "important", "instinct", "interest", "island", "judge", "knowledge", "learn", "length", "library", "light", "magic", "material", "medicine", "mention", "minute", "mobile", "movie", "multiply", "natural", "narrate", "naughty", "notice", "occasion", "often", "opposite", "omnivor", "ordinary", "particular", "peculiar", "perhaps", "popular", "position", "possession", "possible", "potatoes", "pressure", "probably", "promise", "purpose", "quarter", "question", "radio", "random", "recent", "regular", "reign", "remember", "respect", "scent", "scene", "science", "seconds", "sense", "sentence", "separate", "simple","special", "shallow", "straight", "strange", "strength", "suppose", "surprise", "square", "tangle", "telephone", "television", "terrified", "therefore","though", "thought", "through", "triangle", "unite", "various", "weight", "woman", "xylophone"]


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "check") {
                check();
            } 
            else {
                let spellingGame = this.getAttribute("id");
                generate("id");
            }
        });
    }
});


// This here is to generate the words above on shuffle"random"

document.getElementById("generate").addEventListener("click", function(){
    currentWord = Math.floor(Math.random() * words.length);
    word=words[currentWord]

        const utterance = new SpeechSynthesisUtterance();
        utterance.text=word
        speechSynthesis.speak(utterance)
});

// This for the repeat button, provided for user to repeat the word in case they missed it the first time, copied and pasted another one to repeat again. 

document.getElementById("talk").addEventListener("click", function(){
    const utterance = new SpeechSynthesisUtterance();
    utterance.text=word
    speechSynthesis.speak(utterance)
});


// This here is for the check button to check if the word entered was correct or not, there is alsoo an alert to let the user know if the word enetered is correct. 

document.getElementById("check").addEventListener("click", function() { 
    const Entry = document.getElementById("Entry").value;

    if(Entry.trim().toLowerCase()===word){
        alert("That is Correct, Well done")
        TallyScore();
    }
    else {
        alert("Sorry, Try again")
        TallyMistake();
    
    }
    document.getElementById("Entry").value='';
});


// This is where the scores are incremented
function TallyScore() {
    let prevScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++prevScore;
}
function TallyMistake() {
    let prevScore = parseInt(document.getElementById("mistake").innerText);
    document.getElementById("mistake").innerText = ++prevScore;
}