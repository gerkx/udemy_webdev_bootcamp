var p = document.querySelector("p");

var pText = p.textContent;

var pHtml = p.innerHTML;

var ul = document.querySelector("ul");

document.querySelector("h1").textContent = "Boop!";

document.body.innerHTML = "<h1>Good Bye!</h1>";

var link = document.querySelector("a");
link.getAttribute("href");

link.setAttribute("href", "http://bing.com");
link.textContent = "Now it's a link to bing";