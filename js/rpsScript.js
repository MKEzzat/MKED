// alert("Hello World!")

// set round to 0
// set Human Score to 0
// set Computer core to 0
// Human select R/P/S
// Computer select R/P/S
// Compare to values
// Print result (win, lose, tie)
// add score to winner
// round increment
// stop at 5 rounds or 3 score
// reset game

let round = 0;
let humanScore = 0;
let compScore = 0;

// const humanChoice = document.querySelector('#humanChoice');

// Fields

const computerChoice = document.querySelector('#computerChoice');
const roundCount = document.querySelector('#roundCount');
const humanScoreB = document.querySelector('#humanScoreB');
const compScoreB = document.querySelector('#compScoreB');
const resultDisplay = document.querySelector('#result'); 

// Buttons

const play = document.querySelector('#playButton')
const reset = document.querySelector('#reset')


// Getting human choice

play.addEventListener ("click", () => {

    // for (let i=0; i<=5; i++)
    
    const playerForm = document.querySelector('#humanChoice');
    const playerSelection = playerForm.value;


    const [r,p,s] = ['rock','paper','scissors'] //shortcuts
    const ps = playerSelection.toLowerCase(); 

    if (round >= 5) {
        resultDisplay.textContent = "Game Over, Reset to play";
        let round = 0;
        let humanScore = 0;
        let compScore = 0;

    } else {
    
    const computerForm = ["Rock","Paper","Scissors"];
    const randomSelection = Math.floor(Math.random() * computerForm.length);
    const computerSelection = (computerForm[randomSelection]);
    const cs = computerSelection.toLowerCase();
    // roundCount.textContent = `Round: ${round}`;
    computerChoice.textContent = computerSelection;
        if (ps === "") { resultDisplay.textContent = "Please chose Bitch!";
        } else {
        ++round;
        roundCount.textContent = `Round: ${round}`;
        let result
        ((ps === r && cs === s) || (ps === p && cs === r) || (ps === s && cs === p)) ? 
        (resultDisplay.textContent = "Player Wins",
         humanScore++,
         humanScoreB.textContent = humanScore) :
        // (result = "Player Wins", humanScore++) :
        
        ((ps === r && cs === p) || (ps === p && cs === s) || (ps === s && cs === r)) ? 
        (resultDisplay.textContent = "Computer Wins",
         compScore++,
         compScoreB.textContent = compScore) :
        // (result = "Computer Wins", compScore++) :
        
        resultDisplay.textContent = "It's a tie!";
        
        // result = "It's a tie";
    }}});

reset.addEventListener("click", () => {
    
})


// Console Game

// let round = 0; // set baseline to count rounds
// let compScore = 0; // set baseline to count Computer Score
// let humanScore = 0; // set baseline to count HumanScore

// function playGame () { // The actual game

//     for (let i=0; i<5; i++) { // Setting a max of 5 rounds.

//     const playerSelection = prompt ("Rock, Paper or Scissors?");
//     const selections = ["Rock","Paper","Scissors"]; 
//     // Computer selection options
//     const randomSelection = Math.floor(Math.random() * selections.length); 
//     // Computer's random selection formula
//     const computerSelection = (selections[randomSelection]); 
//     // Computer's selection for result
//     const [r,p,s] = ['rock','paper','scissors'] 
//     // shortcuts for "Rock, Paper Scissors"
//     const ps = playerSelection.toLowerCase(); 
//     // enables case-insensitive
//     const cs = computerSelection.toLowerCase(); 
//     // enables case-insensitive
//     function psMessage() {
//         return ps.charAt(0).toUpperCase() + ps.slice(1); 
//         // Upper case first letter for results
//     }

//     let result
//     (i > 5) ? result = 'Game Over' :
//     ((ps === r && cs === s) || (ps === p && cs === r) || (ps === s && cs === p)) ? 
//     (result = "Player Wins", humanScore++) :
    
//     ((ps === r && cs === p) || (ps === p && cs === s) || (ps === s && cs === r)) ? 
//     (result = "Computer Wins", compScore++) :
    
//     result = "It's a tie";

// round++; // Adds round at end of every loop.

// console.log ("Round "+round)
// console.log ('Player chooses: '+ psMessage())
// console.log ('Computer chooses: ' + computerSelection);
// console.log (result);
// console.log ('Human Score is: '+humanScore);
// console.log ('Computer Score is: '+compScore);

// }}