var age = 19;

if (age < 0) {
    console.log("impossible!");
}else if (age == 21){
    console.log("happy 21st birthday!");
}else if (age % 2 !== 0){
    console.log("your age is odd!");
}else if((Math.sqrt(age))%1 == 0){
    console.log("perfect square!")
}