// dice game
let targetDefault = 20;
let diceLoose = 1; // dice loose value // would be nice to add this as input
let diceRolled = 0; // role dice value from rollDice
let playerScoreTotal = 0; // set the player score in a function
               
const setTargetBtn = document.getElementById("setTargetBtn"); // set target button
const setTargetInput = document.getElementById("setTargetInput"); // input for setting target score other than default
const targetScore = document.getElementById("targetScore"); // target score default is let targetDefault = 20
const rollDiceBtn = document.getElementById("rollDiceBtn"); // dice button
const rollDiceValue = document.getElementById("rollDiceValue"); // dice value
const playerScore = document.getElementById("playerScore"); // player score value
const winLooseState = document.getElementById("winLooseState"); // win loose message

setTargetBtn.addEventListener("click", () => {
                // check input value to set target score
    if(setTargetInput.value == 0 || setTargetInput.value == "" ){
        targetScore.textContent = targetDefault;
        setTargetInput.value = "";
    } else {
        targetScore.textContent = setTargetInput.value;
        setTargetInput.value = "";
    }
                // console.log(`log target score is ${targetScore.textContent}`);
});

                // determin win loose game state
rollDiceBtn.addEventListener("click", () => {
    if(rollDiceBtn.textContent == "Roll dice"){
        rollTheDice();
    } else if 
        (rollDiceBtn.textContent == "Reset to play again"){
        reset();
    }
});
                // roll dice on click and update roll dice value
function rollTheDice(){
    diceRolled = Math.floor(Math.random() * 6 +1)
                // console.log(`log dice rolled is ${diceRolled}`);
    rollDiceValue.textContent = diceRolled;
                // console.log(`log context dice rolled ${rollDiceValue.textContent}`);
                // call function to check the dice
    winLooseState.textContent = "";
    checkDiceRolled();
};

function checkDiceRolled() {
                // console.log(`player score ${playerScore.textContent}`)
                // console.log(`player score total ${playerScoreTotal}`)
                // check if the dice rolled is a equal to loose value: default is 1
    if(diceRolled == diceLoose){
        winLooseState.textContent = `You loose! You rolled a ${diceLoose}`;
        rollDiceBtn.textContent = "Reset to play again";
    }else{
                // if not a 1 add score to player score total
        playerScoreTotal = playerScoreTotal + diceRolled;
                // console.log(`after add player score total added dice roll ${playerScoreTotal}`)
        playerScore.textContent = playerScoreTotal;
                // reset win loos messagemessage
        winLooseState.textContent = "";

        if(playerScoreTotal >= targetScore.textContent){
            winLooseState.textContent = `You Win! You scored ${playerScoreTotal}`;
                // console.log(`win loose ${winLooseState.textContent}`);
                // playerScore.textContent = playerScoreTotal;
                // console.log(playerScore);;
                // console.log(`target score ${targetScore.textContent}`);
                // console.log(`player score total ${playerScoreTotal}`);
            rollDiceBtn.textContent = "Reset to play again";
        }
    }
}
// reset variables and values for new game
function reset(){
    targetScore.textContent = targetDefault;
    setTargetInput.value = "";
    playerScore.textContent = 0;
    playerScoreTotal = 0;
    rollDiceValue.textContent = 0;
    rollDiceBtn.textContent = "Roll dice";
};