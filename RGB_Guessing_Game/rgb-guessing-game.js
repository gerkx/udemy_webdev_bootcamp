var numSquares = 6;
var colors = colorGen(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.querySelector("#colorDisplay");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = colorGen(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = colorGen(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisp.textContent = "You got it!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetBtn.textContent = "Play Again?"
        }else{
            this.style.opacity = 0.15;
            messageDisp.textContent = "Try Again";
        }
    })
}

resetBtn.addEventListener("click", function(){
    colors = colorGen(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisp.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

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
