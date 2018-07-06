"use strict";

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x;
    x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    console.log(    x[slideIndex-1].style.display);
    setTimeout(carousel, 3500);
}
