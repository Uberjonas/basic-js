var view = {
	displayMessage: function(msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{ locations: ["06","16","26"], hits: ["","",""] },
					{ locations: ["24","34","44"], hits: ["","",""] },
					{ locations: ["10","11","12"], hits: ["","",""] }]
};
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("fucknuts");