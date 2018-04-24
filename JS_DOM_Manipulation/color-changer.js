var button = document.querySelector("#button");
var bg = document.querySelector(".bg");

button.addEventListener("click", function(){
    bg.classList.toggle("bg-change");
});

