var colors = colorGen(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.querySelector("#colorDisplay");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("right");
            messageDisp.textContent = "You got it!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.opacity = 0.25;
            messageDisp.textContent = "Try Again";
        }
    })
}

colorDisp.textContent = pickedColor;

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        squares[i].style.opacity = 1.0;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random()*colors.length);
    return colors[randomNumber];
}

function colorGen(num){
    var colorArr = [];
    for(var i = 0; i < num; i++){
        colorArr.push(randColor());
    }
    return colorArr;
}

function randColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
