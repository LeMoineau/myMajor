
function begin() {

  document.querySelector("#intro").style.display = "none";
  document.querySelector("#quizz").style.transform = "scale(1)";

}

var limit_to_choose = 2;

function choose(ele) {

  if (ele.classList.contains("selected")) {
    ele.classList.remove("selected");
    return;
  }

  var prec = document.querySelectorAll(".selected");
  if (prec != null && prec.length >= limit_to_choose) {
    prec[0].classList.remove("selected");
  }
  ele.classList.add("selected");

}

var questions = ["Quelle est la matière qui vous donne le plus de mal ?"];
var choices = [["Programmation", "Anglais & Français", "Economie", "Système de transmission"]]

var current_question = -1;

function nextQuestion() {



}
