// dice game

let targetDefault = 20;
let looseValue = 1;
// set target button
const setTargetBtn = document.getElementById("setTargetBtn");
// input for setting target score other than default
const setTargetInput = document.getElementById("setTargetInput");
// target score default is let targetDefault = 20
const targetScore = document.getElementById("targetScore");
//change sibmit to set targe

setTargetBtn.addEventListener("click", () => {
    if(setTargetInput.value == 0 || setTargetInput.value == ""){
        targetScore.textContent = targetDefault;
    } else {
        targetScore.textContent = `${setTargetInput.value}`;
    }
    console.log(`log target score is ${targetScore.textContent}`)
});

/////////////////////////////////////////////////////
// role dice value from rollDice
let diceRolled = 0;
// dice button
const rollDiceBtn = document.getElementById("rollDiceBtn");
// dice value
const rollDiceValue = document.getElementById("rollDiceValue");

// roll dice on click and update roll dice value
rollDiceBtn.addEventListener("click", () => {
    diceRolled = Math.floor(Math.random() * 6 +1)
    console.log(`log dice rolled is ${diceRolled}`)
    rollDiceValue.textContent = diceRolled;
    console.log(`log context dice rolled ${rollDiceValue.textContent}`);
    // call function to check the dice
    winLooseState.textContent = "";
    checkDiceRolled();
});

/////////////////////////////////////////////////////
// set the player score in a function
let playerScoreTotal = 0;

const playerScore = document.getElementById("playerScore");
const winLooseState = document.getElementById("winLooseState");

function checkDiceRolled() {
    console.log(`player score ${playerScore.textContent}`)
    console.log(`player score total ${playerScoreTotal}`)

// check if the dice rolled is a equal to loose value: default is 1
    if(diceRolled == looseValue){
        winLooseState.textContent = `You loose! You rolled a ${looseValue}`;
        rollDiceBtn.textContent = "Reset"
    }else{
        // if not a 1 add score to player score total
        playerScoreTotal = playerScoreTotal + diceRolled;
        console.log(`after add player score total added dice roll ${playerScoreTotal}`)
        playerScore.textContent = playerScoreTotal;
        // reset message
        winLooseState.textContent = "";

        if(playerScoreTotal >= targetScore.textContent){
            winLooseState.textContent = `You Win! You scored ${playerScoreTotal}`
            console.log(`win loose ${winLooseState.textContent}`)
            // playerScore.textContent = playerScoreTotal;
            // console.log(playerScore);

            console.log(`target score ${targetScore.textContent}`)
            console.log(`player score total ${playerScoreTotal}`)
            rollDiceBtn.textContent = "Reset to play again"
        }
    }
}

// need to add this
function reset(){
    
    targetScore.textContent = targetDefault;
    setTargetInput.value = ""
    playerScore.textContent = 0
    playerScoreTotal = 0
    rollDiceValue = 0
    rollDiceBtn.textContent = "Roll the dice"
}

