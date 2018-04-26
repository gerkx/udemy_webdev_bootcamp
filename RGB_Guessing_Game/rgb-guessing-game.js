var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("#colorDisplay");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

resetBtn.addEventListener("click", function(){
    reset();
});

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

function reset(){
    colors = colorGen(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisp.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.opacity = 1.0;
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function setupModeButtons(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
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
}