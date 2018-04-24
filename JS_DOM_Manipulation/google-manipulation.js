var logo = document.querySelector("#hplogo");

logo.setAttribute("srcset", "https://i.imgur.com/U738fP7.gif"); 

logo.style.height = "201px";
logo.style.width = "636px";

var links = document.getElementsByTagName("a");

for(var i=0; i<links.length; i++){
    links[i].style.background = "pink";
    links[i].style.color = "blue";
    links[i].setAttribute("href", "http://gerkx.com");
}