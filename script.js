let words = [
    "Zebra",
    "Words",
    "Alert",
    "Weary",
    "crate",
    "brick",
    "press",
    "check",
    "shock",
    "truth",
    "sweet",
    "salty",
    "being",
    "toast",
    "roast",
    "niece",    
];

let container = document.querySelector(".container");
let WinScreen = document.querySelector(".WinScreen");
let submitButton = document.querySelector(".submitButton");

let inputCount, tryCount, inputRow;
let backSpaceCount = 0;
let randomWord, finalWord;

// detect Touch devices 

const isTouchDevice = () => {
    try{
        // we try to create touchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}