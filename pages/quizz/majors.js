function showMajeurMenu() {

  var majeurMenu = document.getElementById("majeur-menu");

  majeurMenu.style.display = "block";

}

function closeMajeurMenu() {

  var majeurMenu = document.getElementById("majeur-menu");

  majeurMenu.style.display = "none";

}


function QuesSuivante(){

	var Q1 = document.getElementById('Q1');
	Q1.innerHTML = "Question 2";
}

function defil(){

	var v = document.createElement("li")
	document.body.appendChild(v);
	v.setAttribute("id", "ButtonInfo");
	v.innerHTML = "foqspfqs";
}
