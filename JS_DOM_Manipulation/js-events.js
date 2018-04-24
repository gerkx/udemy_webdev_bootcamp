var button = document.querySelector(".btn");
var h1 = document.querySelector("h1");
var numClicks = 0;
button.addEventListener("click", function(){
    numClicks += 1;
    h1.style.background = "green";
    console.log("You clicked the button " + numClicks + " times!" );
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.background = "orange";
    });
}