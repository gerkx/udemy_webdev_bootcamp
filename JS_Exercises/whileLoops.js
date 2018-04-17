console.log("Prnt -10 to 19");
var negPos = -10;

while(negPos <= 19){
    console.log(negPos);
    negPos ++;
}

console.log("Evens 10 to 40");
var evens = 10;
while(evens <= 40){
    if (evens % 2 == 0){
    console.log(evens);
    }
    evens++;
}

console.log("odds 300 to 333");
var odds = 300;
while(odds < 334){
    if(odds%2==0){
        odds++;
    }
    console.log(odds);
    odds += 2;
}

console.log("mults of 15 between 5 and 50");
var fizz = 5;

while(fizz<51){
    if(fizz%15==0){
        console.log(fizz);
    }
    fizz++;
}