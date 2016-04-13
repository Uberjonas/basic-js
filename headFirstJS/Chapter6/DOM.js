function init(){
	var planet = document.getElementById("greenplanet");
	planet.innerHTML = "Red Alert: Hit by phaser fire!";
	planet.setAttribute("class","redtext");
}
window.onload = init;