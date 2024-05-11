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
let WinScreen = document.querySelector(".win-screen");
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
};

// initial setup 

const startGame = async () => {
    WinScreen.classList.add("hide");
    container.innerHTML = "";
    inputCount = 0;
    succesCount = 0;
    tryCount = 0;
    finalWord = "";

    // Creating the grid 

    for (let i = 0; i < 6; i++) {
        let inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");
        
        for (let j = 0; j < 5; j++) {
            // disable by default we will enable one by one 

            inputGroup.innerHTML += '<input type="text" class="input-box" onkeyup="checker(event)"  maxlength="1" disabled>';
        }
        await container.appendChild(inputGroup);
    }
    inputRow = document.querySelectorAll(".input-group")
    inputBox = document.querySelectorAll(".input-box")
    updateDivConfig(inputRow[tryCount].firstChild,false);
    randomWord = getRandom();
}

window.onload = startGame();