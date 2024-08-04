console.log("Hello World");

function well() {
    return "Well you can tell everybody";
}

function yeah() {
    return "Yeah you can tell everybody";
}

function go() {
    return "Go ahead and tell everybody";
}

function im() {
    return "I'm the man, I'm the man, I'm the man";
}

function yes() {
    return "I'm the man, I'm the man, I'm the man";
}

function man() {
    return "I'm the man, I'm the man, I'm the man";
}

function refrain() {
    let words = "";
    words += `${well()}`;
    words += `${yeah()}\n`;
    words += `${go()}\n`;
    words += `${im()}\n`;
    words += `${yes()}\n`;
    words += `${man()}\n`;
    return words;
}

function song(){
    console.log("I believe every lie that I ever told");
    console.log("aid for every heart that I ever stole")
    console.log("I played my cards and I didn't fold");
    console.log("Well it ain't that hard when you got soul (this is my world)");
    console.log("Somewhere I heard that life is a test");
    console.log("I been through the worst but I still give my best");
    console.log("God made my mold different from the rest");
    console.log("Then he broke that mold so I know I'm blessed");
    console.log("(this is my world)");
    let r = refrain();
    console.log(r);
    console.log("I got all the answers to your questions");
    console.log("I got all the answers to your questions");
    console.log("I'll be the preacher you be the confession");
    console.log("I'll be the quick relief to all your stressin' (this is my world)");
    console.log("It's a thin line between love and hate");
    console.log("Is you really real or is you really fake");
    console.log("I'm a soldier standing on my feet");
    console.log("No surrender and I won't retreat (this is my world)");
}

song();