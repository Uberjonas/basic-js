var randomLoc=Math.floor(Math.random()*5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;

while(isSunk==false){
	guess=prompt("Enter a number between 1 and 6.");
	if(guess==null){
		alert("This only works if you enter something, dumbass.")
	}else{
		if(guess<0||guess>6){
			alert("Enter a valid cell number, freakshow.");
		}else{
			guesses=guesses+1;
			if(guess==location1||guess==location2||guess==location3){
				alert("HIT!");
				hits=hits+1;
				if(hits==3){
					isSunk=true;
					alert("You sank my battleship!");
				}
			}else{
				alert("MISS!");
			}
		}
	}
}
var stats = "You took "+guesses+" guesses to sink the battleship, "+"which means your shooting accuracy was %"+((3/guesses)*100);
alert(stats);