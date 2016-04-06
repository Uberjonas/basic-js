function game(){
	var answer1=prompt("Ward is clearly gay, but how gay is he? Want to play a game and find out?(yes or no)");
	if(answer1=="yes"){
		var answer2=prompt("That is correct. Step one. How many cocks are currently penetrating him?(enter a number tard)");
		if (answer2<=1){
        	var answer3=prompt("Based on what we know of Ward, clearly the number is higher. Try again.(Enter bigger number)");
        	if(answer3<=1){
            alert("Fuck you, go away.");
            }
        }else{
        	var win = answer2;
        	var answer4=prompt("You guessed "+win+" cocks! Let's take this further. If you add the cocks he's holding, how many is that?")
        	var grip = 3;
        	var cockAdd=answer4;
        	var correct=(Number(win)+grip);
          	console.log(cockAdd);
          	console.log(correct);
        	if(cockAdd==correct){              
            	var answer5 = prompt("Holy shit...good guess. That's one in each hand, the penetrators, and the one between his feet.");
            }else{
          	  	alert("Nerp, your game ends here. You were close though.");
            }
        }
	}else if(answer1=="no"){
		var douche=alert("Failure. I hate you. Eat a dick.")
	}else{
		var fail=alert("Holy shit, how did you screw that up?");
	}
}
game();