
function showMajeurMenu() {

  var majeurMenu = document.getElementById("majeur-menu");

  majeurMenu.style.display = "block";

}

function closeMajeurMenu() {

  var majeurMenu = document.getElementById("majeur-menu");

  majeurMenu.style.display = "none";

}

function Master(){

  var newSize = 150;
  var oGraphe = document.querySelector('#Ographe');
	var visu = oGraphe.querySelectorAll(".visu")[0];
  var value = oGraphe.querySelector(".value"); //Prend que la premiere itération

  var currentpourcentage = Math.round((newSize/650)*100);
  value.innerHTML = currentpourcentage + "%";
  visu.style.width = newSize + "px";

}
