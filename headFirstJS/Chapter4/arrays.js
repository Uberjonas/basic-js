function game(){
    var answer1 = prompt("Ward is clearly gay, but how gay is he? Want to play a game and find out?(yes or no)");
	if(answer1 == "yes"){
		var answer2 = prompt("That is correct. Step one. How many cocks are currently penetrating him?(enter a number tard)");
		if (answer2 <= 1){
        	var answer3 = prompt("Based on what we know of Ward, clearly the number is higher. Try again.(Enter bigger number)");
        	if(answer3 <= 1){
                alert("Fuck you, go away.");
            }
        }else{
	        var win = answer2;
	        var answer4 = prompt("You guessed "+win+" cocks! Let's take this further. If you add the cocks he's holding, how many is that?")
	        var grip = 3;
	        var cockAdd = answer4;
	        var correct = (Number(win) + grip);
        	if(cockAdd == correct){              
            	var answer5 = prompt("Holy shit...good guess. That's one in each hand, the penetrators, and the one between his feet. Want to use this info to build an array?(yes/no).");
                if(answer5 == "yes"){
                    var cockSucker = [];
                    for(var i=0;i<cockAdd;i++){
                        cockSucker.push(Math.ceil(Math.random()*12));
                    }
                    var answer6 = prompt("The sizes of the cocks you chose for ward are, in inches: "+cockSucker+". Should we use this info to create some statistics?(yes/no)");
                    console.log(cockSucker);
                    if(answer6 == "yes"){
                        var totalInches = 0;
                        var biggestCock = 0;
                        var smallestCock = 14;
                        var avgLength = totalInches/cockSucker.length;
                        for(var i=0;i<cockSucker.length;i++){
                            if (cockSucker[i]>0){
                                totalInches = totalInches+cockSucker;                        
                            }
                            if (cockSucker[i]>biggestCock){
                                biggestCock = cockSucker[i];
                            }
                            if (cockSucker[i]>0&&cockSucker[i]<smallestCock) {
                                smallestCock = cockSucker[i];
                            }
                        }
                        alert("The biggest cock he sucked was "+biggestCock+" inches. The smallest was "+smallestCock+" inches. The average size of the cocks was "+avgLength+" inches. Ward sucked "+cockSucker.length+" cocks today. You're welcome. Game over.")    
                    }else{
                        alert("Seriously? You suck the ballsack. AND it's a sweaty one.");
                    }
                        }
                        }
                }else{
                    alert("Fine, dick, but this was gonna get pretty great.");
                }
            }else{
          	  	alert("Nerp, your game ends here. You were close though.You should try again.");
            }
        }
	}else if(answer1 == "no"){
		var douche = alert("Failure. I hate you. Eat a dick.")
	}else{
		var fail = alert("Holy shit, how did you screw that up?");
	}
}
game();