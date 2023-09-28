
let Nav = document.querySelector(".nav1");

let Bars = document.querySelector(".logo i");

let xmark = document.querySelector(".nav1 ul i");


Bars.onclick = ()=>{
    Nav.style.height = "60vh"
}

xmark.onclick = ()=>{
    Nav.style.height = "0rem"
}


// Top Button Script
let mybutton = document.getElementById("top-btn1");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}




// FAQ Script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.color = "#444"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.color = "blue"
    } 
  });
}