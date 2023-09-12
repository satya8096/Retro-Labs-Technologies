
let Nav = document.querySelector(".nav1");

let Bars = document.querySelector(".logo i");

let xmark = document.querySelector(".nav1 ul i");


Bars.onclick = ()=>{
    Nav.style.height = "19rem"
}

xmark.onclick = ()=>{
    Nav.style.height = "0rem"
}