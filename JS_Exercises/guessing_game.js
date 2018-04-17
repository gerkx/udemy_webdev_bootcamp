var secretNumber = 13;

start:
var guess = Number(prompt("Guess a number!"));


if (guess == secretNumber){
    alert("you got it!");
}else if(guess < secretNumber){
    alert("you guessed low, try again");
}else{
    alert("you guessed too high, try again!")
}