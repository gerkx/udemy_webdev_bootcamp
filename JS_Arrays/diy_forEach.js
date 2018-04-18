var numArray = [1,2,3,4,5,6,7];

function myForEach(array, func){
    for(i=0; i<array.length; i++){
        func(array[i])
    }
}

function printItem(item){
    console.log(item);
}


myForEach(numArray, function(item){
    console.log(item);
});

Array.prototype.myForEachObj = function(func){
    for(i=0; i<this.length; i++){
        func(this[i]);
    }
}

numArray.myForEachObj(printItem);