/* MENU OPEN AND CLOSE FUNCTIONS */

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '350px';
    document.getElementById('main').style.marginLeft = '350px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
}

/* ELEMENTS */

const compPlayerBtn = document.querySelector("#p2comp");
const playerOneDisplay = document.getElementById('p1Dname');
const playerNameOne = document.getElementById('p1name');
const playerTwoDisplay = document.getElementById('p2Dname');
const playerNameTwo = document.getElementById('p2name');
const soundEffects = document.querySelector('#sounds');
const messageBoard = document.getElementById('messageBoard');
const startGameBtn = document.getElementById('start');

/* FLAGS */

let playerOne = {
    id: "playerOne",
    name: ""
};
let playerTwo = {
    id: "playerTwo",
    name: ""
};

let computerPlayer = false;
let currentPlayer = "";
let playerOneMoves = [];
let playerTwoMoves = [];
let freeSquares = [1,2,3,4,5,6,7,8,9];
const winningCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];




/* NAME INPUTS & MENU BUTTONS */

//Sets player names and prints to display
function playerOneName(){
    playerOne.name = playerNameOne.value;
    playerOneDisplay.innerHTML = "PLAYER ONE: " + playerNameOne.value;
}

function playerTwoName(){
    if(computerPlayer == true) {
        alert("Player Two is the computer. Please switch off computer player for two player mode.")
    } else {
    playerTwo.name = playerNameTwo.value;
    playerTwoDisplay.innerHTML = "PLAYER TWO: " + playerNameTwo.value;
    }
};

//Sets flag for computer player and prints to display
compPlayerBtn.addEventListener('click', (event) => {
    if(compPlayerBtn.checked == true) {
        computerPlayer = true;
        
    playerTwoDisplay.innerHTML = "PLAYER TWO: COMPUTER";
    } else {
    computerPlayer = false;
    playerTwoDisplay.innerHTML = "PLAYER TWO";
    
    }
});

//sets listener for start game button

startGameBtn.addEventListener ('click', (event) => {
    newGame();
    newTurn();
})
/* GAME FUNCTIONS */

function updateDisplay(player){
    messageBoard.innerHTML = player.name + " READY?";
    setTimeout(updateDisplayTurn(currentPlayer), 2000);
}

function updateDisplayTurn(player){
    if(player == playerOne){
    messageBoard.innerHTML = player.name + " PLACE YOUR X";
    } else {
    messageBoard.innerHTML = player.name + " PLACE YOUR O";
    }
}

function updateCurrentPlayer(){
    if(currentPlayer == "") {
        currentPlayer = playerOne;
    } else if(currentPlayer == "playerOne"){
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}

function newGame(){
    playerOneMoves = [];
    playerTwoMoves = [];
    freeSquares = [1,2,3,4,5,6,7,8,9]; 
}

function newTurn(){
    updateCurrentPlayer();
    console.log(currentPlayer);
    console.log(playerOne.name);  
    updateDisplay(currentPlayer);
}