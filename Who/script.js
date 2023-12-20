var question = document.getElementById("question");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

function yesFunc() {
    question.style.display = "none";
    yes.style.display = "block";
    console.log("called");
}

function noFunc() {
    question.style.display = "none";
    no.style.display = "block";
    console.log("calledN");
}

var yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", yesFunc);
var noButton = document.getElementById("noButton");
noButton.addEventListener("click", noFunc);