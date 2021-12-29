


// let player456 = "☂️";
// let player001 = "⭐️";

let umbrellaPoints = 0;
let starPoints = 0;



// it will be umbrella players turn
let currentPlayer = "☂️"


// true will be umbrella and false will be star 
let turn = true;   

// using an array to build the board of the game
let board = [ "", "","", "", "", "", "", "", "", ]                          

let totalScore = 0;
let umbrellaScore = 0;
let starScore = 0;




// will print out which player turn it will be 
let currentPlayerTurn = () => `It's currently ${currentPlayer}'s turn`;     
let win = () => `${currentPlayer} has won`;                              
let drawMessage = () => "You both tied";                                   

winningMessage = document.querySelector(".winner-message");




// when user resets game, the board will be blank and score go to zero
function resetGame() {
    console.log("Game will reset");
}

let restartButton = document.querySelector("#restartButton");           // will intereact with reset button later
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

winningConditions.forEach(winningLine => {      // for each element inside of winningConditions label each index
    let row1 = winningLine[0];
    let row2 = winningLine[1];
    let row3 = winningLine[2];
    // console.log(row1);
    // console.log(board[row1][0])
});


const boxElements = document.querySelectorAll(".box");
boxElements.forEach(box => box.addEventListener("click", function() {
    if (box.innerText === "☂️" || box.innerText === "⭐️") {
        alert("cannont click here") }
    box.innerText = currentPlayer;
    index = box.dataset.box;
    board.splice(index, 1, currentPlayer) 
    console.log(board)
    // box.style.pointerEvents = "none";
    for (const winningCondition of winningConditions) {
        // console.log(winningCondition[1])
    
        boxOne = board[winningCondition[0]];
        boxTwo = board[winningCondition[1]];
        boxThree = board[winningCondition[2]]
        if (boxOne !== "" && boxOne === boxTwo && boxOne === boxThree) {
            console.log(" winner");
            winningMessage.classList.add("show");
        }    
    }
    if (turn === true) {
        currentPlayer = "⭐️"
        turn = false;
    } else if (turn == false) {
        turn = true;
        currentPlayer = "☂️";
    }

} ))
    
    console.log(boxElements)

    restartButton.addEventListener("click",function() {
        winningMessage.classList.remove("show");
        board = [ "", "","", "", "", "", "", "", "", ]
        boxElements.forEach(box => box.innerText = "")
        box.attributeStyleMap.delete("pointer-events");
    }) 

    


// boxElements.forEach(box => console.log(box.dataset.box))




    
    // if ( board[row1] === currentPlayer && board[row2] === currentPlayer && board[row3] === currentPlayer );    // current player equals winning conditions

//     {
//         const boxes = document.querySelectorAll(".box");
//         let data1= document.querySelector(`data-box${row1}`);
//         let data2= document.querySelector(`data-box${row2}`);
//         let data3= document.querySelector(`data-box${row3}`);

//         boxes.forEach(box => {

//         })
//     }
// })       
