
function appears(id) {

  var nav = document.querySelector("#" + id);
  nav.style.height = "150px";
  nav.style.padding = "20px";

}

function grapheDisplay(ele, value_oui, value_non) {

  var maxWidth = 500;

  var choice = ele.parentElement;
  for (temp of choice.querySelectorAll(".graphe-choice-button")) {
    if (temp.classList.contains("selected")) temp.classList.remove("selected");
  }
  ele.classList.add("selected");

  var grapheContainer = choice.parentElement;
  var visus = grapheContainer.querySelectorAll(".visu");
  var pourcents = grapheContainer.querySelectorAll(".pourcent");

  visus[0].style.width = Math.round(value_oui*maxWidth/100) + "px";
  pourcents[0].innerHTML = value_oui + "%";
  visus[1].style.width = Math.round(value_non*maxWidth/100) + "px";
  pourcents[1].innerHTML = value_non + "%";

}
