// Creating button click to show/hide navbar
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js for typing effect
var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});
