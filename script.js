//Verse 1
function  refrain(){
    let words = "";
words += "Well you can tell everybody<br>"
words += "Yeah you can tell everybody<br>"
words += "Go ahead and tell everybody<br>"
words += "I'm the man, I'm the man, I'm the man<br>"
words += "Yes I am, yes I am, yes I am<br>"
words += "I'm the man, I'm the man, I'm the man<br><br>"
lyrics.innerHTML += words;
}

function refrain2(){
    let words = "";
    words += "Stand up now and face the sun <br>"
    words += "Won't hide my tail or turn and run <br>"
    words += "It's time to do what must be done <br>"
    words += "Be a king when kingdom comes <br><br>"
    lyrics.innerHTML += words;
}



function song(){

refrain();

let verse1 = "";
verse1 += "I believe every lie that I ever told <br>";
verse1 += "Paid for every heart that I ever stole <br>"
verse1 += "I played my cards and I didn't fold <br>";
verse1 += "Well it ain't that hard when you got soul  this is my world <br>";
verse1 += "Somewhere I heard that life is a test <br>";
verse1 += "I been through the worst but I still give my best <br>";
verse1 += "God made my mold different from the rest <br>";
verse1 += "Then he broke that mold so I know I'm blessed <br>";
verse1 += " this is my world<br><br>";
lyrics.innerHTML += verse1;

refrain2();

refrain();

refrain();

//Verse2 
let verse2 = "";
verse2 += "I got all the answers to your questions <br>";
verse2 += "I got all the answers to your questions <br>";
verse2 += "I'll be the preacher you be the confession <br>";
verse2 += "I'll be the quick relief to all your stressin' this is my world <br>";
verse2 += "It's a thin line between love and hate <br>";
verse2 += "Is you really real or is you really fake <br>";
verse2 += "I'm a soldier standing on my feet <br>";
verse2 += "No surrender and I won't retreat this is my world <br><br>";
lyrics.innerHTML += verse2;

refrain2();

refrain();
}




    songLyricsButton.onclick = song;
    button.addEventListener("click", handleClick);
















