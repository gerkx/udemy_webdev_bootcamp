function isEven(num){
    if(num%2 == 0){
        return true
    }
    return false
}

function factorial(num){
    if(num === 0 || num === 1 ){
        return 1;
    }else{
        return(num*factorial(num-1));
    }

}

function kebabToSnake(str){
    var snakeCase = str.replace(/-/i, '_');
    return snakeCase;
}
