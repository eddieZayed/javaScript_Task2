var content = document.querySelector("div");
var increaseBtn = document.querySelector(".increase");
var reduceBtn = document.querySelector(".reduce");


function increaseFont(){
content.style.fontSize = "60px";
}

function reduceFont(){
content.style.fontSize = "10px";
}

increaseBtn.onclick = increaseFont;
reduceBtn.onclick = reduceFont;
