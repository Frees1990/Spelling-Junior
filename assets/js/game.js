let word;
    // words to use for the spelling
const words = ["accident", "accurate", "actual", "adult", "address", "afraid", "answer", "appear", "April", "arrive", "attention", "August", "Autumn", "believe", "bicycle", "Birthday", "breath", "build", "busy", "business", "calculate", "calendar", "cartoon", "caught", "centre","century","certain", "chocolate", "Christmas", "circle","complete", "communicacte", "consider","continue", "corpse", "computer", "couch", "current", "decide","December", "debt","delicious", "describe","different","difficult","disappear", "dessert", "dream", "early","earth","eight","enough", "exercise", "excited", "experience","experiment","extreme","famous","favourite","February", "figure", "forward","Friday","fruit", "general", "generate", "grammar","group","guard","guide", "Halloween", "heard","heart","height","history", "horrizon", "hour","imagine", "increase", "important", "instinct", "interest", "island","January", "judge", "June", "July", "knowledge", "learn", "length", "library", "light", "magic", "March", "May", "material", "medicine", "mention", "minute", "mobile", "Monday", "movie", "multiply", "natural", "narrate", "naughty", "notice", "November", "occasion", "October", "often", "opposite", "ordinary", "particular", "peculiar", "perhaps", "popular", "position", "possession", "possible", "potatoes", "pressure", "probably", "promise", "purpose", "quarter", "question", "radio", "random", "recent", "regular", "reign", "remember", "respect", "Saturday", "scent", "scene", "science", "seconds", "September", "sense", "sentence", "Spring", "separate", "simple","special", "shallow", "straight", "strange", "strength", "Summer", "Sunday", "suppose", "surprise", "square", "tangle", "telephone", "television", "terrified", "therefore","though", "thought", "Thursday", "through", "triangle", "Tuesday", "Universe", "unite", "Valentines", "various", "weight", "Wednesday", "Winter", "woman", "xylophone" ]

// This here is to generate the words above on shuffle"random"

document.getElementById("generate").addEventListener("click", function(){
    currentWord = Math.floor(Math.random() * words.length);
    word=words[currentWord]

        const utterance = new SpeechSynthesisUtterance();
        utterance.text=word
        speechSynthesis.speak(utterance)
});

// This here is for the check button to check if the word entered was correct or not, there is alsoo an alert to let the user know if the word enetered is correct. 

document.getElementById("check").addEventListener("click", function() { 
    const Entry = document.getElementById("Entry").value;
    if(Entry.trim().toLowerCase()===word){
        alert("That is Correct, Well done")
    }
    else {
        alert("Sorry, That is not Correct")
    }
    document.getElementById("Entry").value='';
});


// This for the repeat button, provided for user to repeat the word in case they missed it the first time, copied and pasted another one to repeat again. 

document.getElementById("generate").addEventListener("click", function(){
    const utterance = new SpeechSynthesisUtterance();
    utterance.text=word
    speechSynthesis.speak(utterance)

    document.getElementById("generate").addEventListener("click", function(){
        const utterance = new SpeechSynthesisUtterance();
        utterance.text=word
        speechSynthesis.speak(utterance)
    });
});