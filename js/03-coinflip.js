//MAKE HEADS = 0; TAILS = 1
const HEADS = 0;
const TAILS = 1;

//GAME SETUP - GET RANDOM NUMBER
let coinFlip = Math.round(Math.random());
//console.log(coinFlip);

//ASK PLAYER TO CHOOSE HEADS OR TAILS
let choice = prompt("HEADS or TAILS?").toUpperCase(); // Convert choice to uppercase
//console.log(choice);

//EVALUATE THE RANDOM NUMBER AND THE PLAYER CHOICE
// console.log(coinFlip === HEADS);
// console.log(coinFlip === TAILS);

if (coinFlip === HEADS) {
    if (choice === "HEADS") {
        alert('The flip was heads and you chose heads...you win!');
    } else {
        alert('The flip was heads but you chose tails...you lose!');
    }
} else { // coinFlip === TAILS
    if (choice === "HEADS") {
        alert('The flip was tails but you chose heads...you lose!');
    } else {
        alert('The flip was tails and you chose tails...you win!');
    }
}



// If the result is heads and the user selects heads, display the following message within an alert:
// The flip was heads and you chose heads...you win!
// If the result is heads and the user selects tails, display the following message within an alert:
// The flip was heads but you chose tails...you lose!
// If the result is tails and the user selects heads, display the following message within an alert:
// The flip was tails but you chose heads...you lose!
// If the result is tails and the user selects tails, display the following message within an alert:
// The flip was tails and you chose tails...you win!