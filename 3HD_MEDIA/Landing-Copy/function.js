
var button = document.querySelector(".myBtn");

var change = document.querySelector(".space");
var change2 = document.querySelector(".parallax-el")
var change3 = document.querySelector(".hero-image");
var up = document.querySelector(".overlay-2");

button.addEventListener("click",function(){
     
     change.classList.toggle("additional");
     change2.classList.toggle("additional");
     up.classList.add("upup");
});

// button.addEventListener("click", function(){
//      change3.classList.toggle("additional");
// });
