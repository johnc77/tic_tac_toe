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
const playerOneScoreDisplay = document.getElementById('p1Score');
const playerTwoScoreDisplay = document.getElementById('p2Score');


const cellOne = document.getElementById('sectionOne');
const cellTwo = document.getElementById('sectionTwo');
const cellThree = document.getElementById('sectionThree');
const cellFour = document.getElementById('sectionFour');
const cellFive = document.getElementById('sectionFive');
const cellSix = document.getElementById('sectionSix');
const cellSeven = document.getElementById('sectionSeven');
const cellEight = document.getElementById('sectionEight');
const cellNine = document.getElementById('sectionNine');

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
let totalMoves = [];
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
let playerOneScore = 0;
let playerTwoScore = 0;

let firstClickOne = true;
let firstClickTwo = true;
let firstClickThree = true;
let firstClickFour = true;
let firstClickFive = true;
let firstClickSix = true;
let firstClickSeven = true;
let firstClickEight = true;
let firstClickNine = true;

let startClicked = false;




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
    if(startClicked == false){
        newGame();
        newTurn();
        startClicked = true;
    } else {
        reset();
        newGame();
        newTurn();
        activateCells();
        startClicked = false;
    }
})
/* GAME FUNCTIONS */

function updateDisplay(player){
    messageBoard.innerHTML = player.name + " READY?";
    // setTimeout(updateDisplayTurn(currentPlayer), 2000);
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
    } else if(currentPlayer == playerOne){
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}

function activateCells(){
    cellOne.style.cursor = 'pointer';
    cellTwo.style.cursor = 'pointer';
    cellThree.style.cursor = 'pointer';
    cellFour.style.cursor = 'pointer';
    cellFive.style.cursor = 'pointer';
    cellSix.style.cursor = 'pointer';
    cellSeven.style.cursor = 'pointer';
    cellEight.style.cursor = 'pointer';
    cellNine.style.cursor = 'pointer';
}

    function newGame(){
    playerOneMoves = [];
    playerTwoMoves = [];
    freeSquares = [1,2,3,4,5,6,7,8,9]; 
    activateCells();
}

function newTurn(){
    updateCurrentPlayer();
    console.log('Update player called');
    updateDisplay(currentPlayer);
    console.log('update display called');  
}

function checkDraw(){
    if (totalMoves.length == 9){
        messageBoard.innerHTML = 'GAME DRAW';
        console.log('DRAW');
        
    } else {
        newTurn();
    }
}

function draw(){
    messageBoard.innerHTML = 'GAME DRAW';
    console.log('checkdraw called');
}

function checkWin(playerMovesArr){
    if (check(playerMovesArr) == true) {
        return winner();
    } else if (totalMoves.length == 9) {
        return draw();
    } else {
        return newTurn();
}
};


function check(playerMovesArr) {
    for (let i = 0; i < winningCombo.length; i++) {
        if (winningCombo[i].every(item => playerMovesArr.indexOf(item) !== -1)) {
            return true;
        }
    }
    return false;
};

function winner() {
        cellOne.style.cursor = "";
        firstClickOne = false;
        cellTwo.style.cursor = "";
        firstClickTwo = false;
        cellThree.style.cursor = "";
        firstClickThree = false;
        cellFour.style.cursor = "";
        firstClickFour = false;
        cellFive.style.cursor = "";
        firstClickFive = false;
        cellSix.style.cursor = "";
        firstClickSix = false;
        cellSeven.style.cursor = "";
        firstClickSeven = false;
        cellEight.style.cursor = "";
        firstClickEight = false;
        cellNine.style.cursor = "";
        firstClickNine = false;
        
        messageBoard.innerHTML = 'WINNER';
        
        if (currentPlayer == 'playerOne'){
            playerOneScore++
        } else {
            playerTwoScore++
        }

        updateScore();
};

function updateScore() {
    playerOneScoreDisplay.innerHTML = playerOneScore;
    playerTwoScoreDisplay.innerHTML = playerTwoScore;
};

function takeTurnOne(){
    if(firstClickOne === true){
        cellOne.style.cursor = "";
        firstClickOne = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(1);
                totalMoves.push(1);
                cellOne.innerHTML = 'X';
                checkWin(playerOneMoves);
                console.log('checkwin called p1');
                
            } else {
                playerTwoMoves.push(1);
                totalMoves.push(1);
                cellOne.innerHTML = 'O';
                checkWin(playerTwoMoves);
                console.log('checkwin called p2');
                
        };
    }       
};
    
    
function takeTurnTwo(){
    if(firstClickTwo === true){
        cellTwo.style.cursor = "";
        firstClickTwo = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(2);
                totalMoves.push(2);
                cellTwo.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(2);
                totalMoves.push(2);
                cellTwo.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };
    }
};


function takeTurnThree(){
    if(firstClickThree === true){
        cellThree.style.cursor = "";
        firstClickThree = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(3);
                totalMoves.push(3);
                cellThree.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(3);
                totalMoves.push(3);
                cellThree.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};



function takeTurnFour(){
    if(firstClickFour === true){
        cellFour.style.cursor = "";
        firstClickFour = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(4);
                totalMoves.push(4);
                cellFour.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(4);
                totalMoves.push(4);
                cellFour.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};

function takeTurnFive(){
    if(firstClickFive === true){
        cellFive.style.cursor = "";
        firstClickFive = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(5);
                totalMoves.push(5);
                cellFive.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(5);
                totalMoves.push(5);
                cellFive.innerHTML = 'O';
                checkWin(playerTwoMoves);
            };
        
    }
};

function takeTurnSix(){
    if(firstClickSix === true){
        cellSix.style.cursor = "";
        firstClickSix = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(6);
                totalMoves.push(6);
                cellSix.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(6);
                totalMoves.push(6);
                cellSix.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};

function takeTurnSeven(){
    if(firstClickSeven === true){
        cellSeven.style.cursor = "";
        firstClickSeven = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(7);
                totalMoves.push(7);
                cellSeven.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(7);
                totalMoves.push(7);
                cellSeven.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};

function takeTurnEight(){
    if(firstClickEight === true){
        cellEight.style.cursor = "";
        firstClickEight = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(8);
                totalMoves.push(8);
                cellEight.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(8);
                totalMoves.push(8);
                cellEight.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};

function takeTurnNine(){
    if(firstClickNine === true){
        cellNine.style.cursor = "";
        firstClickNine = false;
            if(currentPlayer == playerOne){
                playerOneMoves.push(9);
                totalMoves.push(9);
                cellNine.innerHTML = 'X';
                checkWin(playerOneMoves);
            } else {
                playerTwoMoves.push(9);
                totalMoves.push(9);
                cellNine.innerHTML = 'O';
                checkWin(playerTwoMoves);
        };        
    }
};

function reset(){
    newGame();
    newTurn();
    clearCells();
}

function clearCells(){
    cellOne.innerHTML = "";
    cellTwo.innerHTML = "";
    cellThree.innerHTML = "";
    cellFour.innerHTML = "";
    cellFive.innerHTML = "";
    cellSix.innerHTML = "";
    cellSeven.innerHTML = "";
    cellEight.innerHTML = "";
    cellNine.innerHTML = "";
}