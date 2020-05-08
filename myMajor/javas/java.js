
function appears(id) {

  var nav = document.querySelector("#" + id);
  nav.style.height = "150px";
  nav.style.padding = "20px";

}

function grapheDisplay(ele, values) {

  var maxWidth = 500;

  var choice = ele.parentElement;
  for (temp of choice.querySelectorAll(".graphe-choice-button")) {
    if (temp.classList.contains("selected")) temp.classList.remove("selected");
  }
  ele.classList.add("selected");

  var grapheContainer = choice.parentElement;
  var visus = grapheContainer.querySelectorAll(".visu");
  var pourcents = grapheContainer.querySelectorAll(".pourcent");

  for(i = 0; i<values.length; i++) {
    visus[i].style.width = Math.round(values[i]*maxWidth/100) + "px";
    pourcents[i].innerHTML = values[i] + "%";
  }

}

var titles = ["Quelle majeur souhaiteriez-vous intégrer ?",
  "Quelle majeur avez-vous intégré ?",
  "Hésitez-vous entre plusieurs majeurs ?",
  "Etes-vous intéressé par l'alternance ?",
  "Votre majeur actuelle correspond-elle à votre vision de cette majeur ?",
  "Etes-vous satisfait de cette majeur ?"];
var graphes_choices = [["Cybersécurité", "Software Engineering", "Digital Transformation and Cloud services"],
  ["Cybersécurité", "Business Intelligence and Analytics", "Big Data and Machine Learning"],
  ["Oui", "Non"],
  ["Oui", "Non"],
  ["Oui", "Non"]];
var graphes_values = [[28.1, 14, 8.8],
  [32.3, 22.6, 16.1],
  [70.2, 29.8],
  [47.4, 52.6],
  [64.5, 35.5],
  [67.7, 32.3]];
var graphes_tags = [["Licences", "57 réponses"],
  ["Masters", "31 réponses"],
  ["Licences", "57 réponses"],
  ["Licences", "57 réponses"],
  ["Masters", "31 réponses"],
  ["Masters", "31 réponses"]];

var current_graphe = 0;

function instantiateNewGraphe(ele) {

  current_graphe = (current_graphe+1)%(titles.length-1);

  //Destroy prec graphe
  all_container = ele.parentElement;
  toRemove = all_container.querySelector(".graphe-container");
  all_container.removeChild(toRemove);

  //Create new one with current_graphe value
  graphe_container = document.createElement("div"); //graphe-container
  graphe_container.classList.add("graphe-container");
  graphe_container.innerHTML = "<h2 class='graphe-title'>" + titles[current_graphe] + "</h2>";

  for (i = 0; i<graphes_choices[current_graphe].length; i++) { //graphe
    temp = document.createElement("div");
    temp.classList.add("graphe");
    temp.innerHTML = "<div class='desc'>" + graphes_choices[current_graphe][i] + "</div>";
    temp.innerHTML += "<div class='visu'> <div class='pourcent'>" + graphes_values[current_graphe][i] + "%</div> </div>";
    graphe_container.appendChild(temp);
  }

  graphe_choice_container = document.createElement("div"); //tags - choices
  graphe_choice_container.classList.add("graphe-choice");
  for (i = 0; i<graphes_tags[current_graphe].length; i++) {
    temp = document.createElement("div");
    temp.classList.add("graphe-choice-button")
    temp.classList.add("like-selected");
    temp.innerHTML = graphes_tags[current_graphe][i];
    graphe_choice_container.appendChild(temp);
  }
  graphe_container.appendChild(graphe_choice_container);
  all_container.insertBefore(graphe_container, ele);

  grapheDisplay(graphe_choice_container.querySelector("div"), graphes_values[current_graphe]);

}
