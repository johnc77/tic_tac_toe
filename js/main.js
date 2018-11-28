/* MENU OPEN AND CLOSE FUNCTIONS */

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '350px';
    document.getElementById('main').style.marginLeft = '350px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
}

/* FLAGS */

let computerPlayer = false;

/* ELEMENTS */

const compPlayerBtn = document.querySelector("#p2comp");
const playerOneDisplay = document.getElementById('p1Dname');
const playerNameOne = document.getElementById('p1name');
const playerTwoDisplay = document.getElementById('p2Dname');
const playerNameTwo = document.getElementById('p2name');
const soundEffects = document.querySelector('#sounds');


/* NAME INPUTS & MENU BUTTONS */

function playerOneName(){
    playerOneDisplay.innerHTML = "PLAYER ONE: " + playerNameOne.value;
}

function playerTwoName(){
    if(computerPlayer == true) {
        alert("Player Two is the computer. Please switch off computer player for two player mode.")
    } else {
    playerTwoDisplay.innerHTML = "PLAYER TWO: " + playerNameTwo.value;
    }
};

compPlayerBtn.addEventListener('click', (event) => {
    if(compPlayerBtn.checked == true) {
        computerPlayer = true;
    playerTwoDisplay.innerHTML = "PLAYER TWO: COMPUTER";
    } else {
    computerPlayer = false;
    playerTwoDisplay.innerHTML = "PLAYER TWO";
    }
});
