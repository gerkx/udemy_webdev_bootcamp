var playerOneScore = document.querySelector(".player-1");
var playerTwoScore = document.querySelector(".player-2");
var playerOneButton = document.querySelector(".btn-1");
var playerTwoButton = document.querySelector(".btn-2");
var resetButton = document.querySelector(".btn-reset");
var para = document.querySelector(".paragraph");
var numInput = document.querySelector("input");
var endGameDisp = document.querySelector(".end-game");

p1 = 0;
p2 = 0;
endGame = 5;

numInput.addEventListener("change", function(){
    endGame = Number(this.value);
    endGameDisp.textContent = endGame;
    reset();
})

playerOneButton.addEventListener("click", function(){
    if(p1 < endGame && p2 < endGame){
        p1++;
        playerOneScore.textContent=p1;
        if(p1 === endGame){
            playerOneScore.classList.add("winner");
        }
    }
});

playerTwoButton.addEventListener("click", function(){
    if(p1 < endGame && p2 < endGame){
        p2++;
        playerTwoScore.textContent=p2;
        if(p2 === endGame){
            playerTwoScore.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1 = 0;
    p2 = 0;
    playerOneScore.textContent=p1;
    playerTwoScore.textContent=p2;
    playerOneScore.classList.remove("winner");
    playerTwoScore.classList.remove("winner");
}
