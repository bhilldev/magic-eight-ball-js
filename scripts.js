"use strict";

const fortune = ["Maybe...", "It is certain!", "Never", "Ask Again..."];
const triangle = document.querySelector('.triangle');
function fade(element) {
    document.removeEventListener("click", fade);
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            triangle.style.visibility = "hidden";
            changeText();
            unfade(triangle);
        }
        triangle.style.opacity = op;
        triangle.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
        
    
}

function unfade(element) {

    var op = 0.1;  // initial opacity
    element.style.visibility = "visible";
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);            
            document.addEventListener("click", fade);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
    
}
function changeText() {
    var randomIndex = Math.floor(Math.random() * fortune.length);
    document.querySelector('.text').textContent = fortune[randomIndex];
}

document.addEventListener("click", fade);
