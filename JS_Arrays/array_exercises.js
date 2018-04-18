var colors = ["red", "green", "blue"];
console.log(colors);
colors.push("orange");
console.log(colors);
colors.unshift("violet");
console.log(colors);
// colors.shift();
console.log(colors);
// colors.pop();
console.log(colors);

console.log(colors.indexOf("green"));

var warm = colors.slice(0,1);
console.log(warm);

for(var i = 0; i<colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(colorItem){
    console.log(colorItem);
});

function printColor(color){
    console.log("===");
    console.log(color);
    console.log("===");
}

colors.forEach(printColor);


// ============================================
var numArray = [1,2,3,4,5,6,7];

function printReverse(arr){
    var revArray = arr.reverse();
    revArray.forEach(function(item){
        console.log(item);
    });
}

// printReverse(numArray);
var numArray = [1,2,3,4,5,6,7];
function isUniform(arr){
    var firstItem = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== firstItem){
            return false;
        }
    }
    return true;

}
isUniform(numArray);

var numArray = [1,2,3,4,5,6,7];
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum += item;
    });
    return sum;
}
sumArray(numArray);

var randoArray = [6,4,3,8,1,1,9];
function max(arr){
    var sortArray = arr;
    sortArray.sort();
    sortArray.reverse();
    return sortArray[0]; 
}
max(randoArray);