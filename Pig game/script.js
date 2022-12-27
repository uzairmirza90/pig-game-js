let rollDice = document.querySelector(".roll-dice");
let img = document.querySelector("img");
let player1Score = document.querySelector(".player-1-c-score");
let player2Score = document.querySelector(".player-2-c-score");
let addCurrentScore1 = 0;
let addCurrentScore2 = 0;

let randomNumber = function(){
    let number = Math.floor(Math.random() * 6 + 1);
    return number;
}

rollDice.addEventListener("click", function(){
    player1Turn();
})

function player1Turn(){
    let currentScore = randomNumber();
    if(currentScore === 1){
        img.src = `dice-${1}.png`;
        player2Turn();
        currentScore = 0;
        player1Score.innerHTML = currentScore;
    }else{
        img.src = `dice-${currentScore}.png`;
        img.style.visibility = "visible";
        player1Score.innerHTML = currentScore;
        addCurrentScore1 += currentScore
        player1Score.innerHTML = addCurrentScore1;
    }
}

function player2Turn(){
    let currentScore = randomNumber();
    if(currentScore === 1){
        img.src = `dice-${1}.png`;
        player1Turn();
        currentScore = 0;
        player2Score.innerHTML = currentScore;
    }else{
        img.src = `dice-${currentScore}.png`;
        img.style.visibility = "visible";
        player2Score.innerHTML = currentScore;
        addCurrentScore2 += currentScore
        player1Score.innerHTML = addCurrentScore2;
    }
}
