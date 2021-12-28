
// As a user, I should be able to start a new tic tac toe game
// As a user, I should be able to click on a square to add X first and then O, and so on
// As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
// As a user, I should not be able to click the same square twice
// As a user, I should be shown a message when I win, lose or tie
// As a user, I should not be able to continue playing once I win, lose, or tie
// As a user, I should be able to play the game again without refreshing the page




// let player456 = "☂️";
// let player001 = "⭐️";




// it will be umbrella players turn
let currentPlayer = "☂️"


// true will be umbrella and false will be star 
let turn = true;   

// using an array to build the board of the game
let board = [                            
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

let totalScore = 0;
let umbrellaScore = 0;
let starScore = 0;




// will print out which player turn it will be 
let currentPlayerTurn = () => `It's currently ${currentPlayer}'s turn`;     
let winner = () => `${currentPlayer} has won`;                              
let drawMessage = () => "You both tied";                                   





// when user resets game, the board will be blank and score go to zero
function resetGame() {
    console.log("Game will reset");
}

let resetButton = document.getElementsByClassName(".reset");           // will intereact with reset button later
// resetButton.EventListener("click", restartGame);


// // selected all the boxes that will be used for the game
// let boxes = document.querySelectorAll(".box");





// using array to list out winning conditions to be able to print out their indexes
let winningConditions = [                       
    [0, 1, 2],   
    [3, 4, 5],    
    [6, 7, 8],   
    [0, 4, 8],    
    [6, 4, 2],     
    [0, 3, 6],    
    [1, 4, 7],  
    [2, 5, 8],    
];

console.log( winningConditions[1])

winningConditions.forEach(winningLine => {      // for each element inside of winningConditions label each index
    let row1 = winningLine[0];
    let row2 = winningLine[1];
    let row3 = winningLine[2];

    if ( board[row1] === currentPlayer && board[row2] === currentPlayer && board[row3] === currentPlayer );    // current player equals winning conditions

    {
        let boxes = document.querySelectorAll(".box");

    }
})       


