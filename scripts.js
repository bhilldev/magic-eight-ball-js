"use strict";

const fortune = ["Maybe...", "It is certain!", "Never", "Ask Again..."];

var triangle = document.querySelector(".triangle");
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.visibility = "hidden";
            changeText();
            unfade(triangle);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.visibility = "visible";
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
function changeText() {
    var randomIndex = Math.floor(Math.random() * fortune.length);
    document.querySelector(".text").textContent = fortune[randomIndex];
}
