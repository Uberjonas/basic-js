setTimeout(wakeUpUser, 5000);
			function wakeUpUser(){
				alert("You've been staring for awhile now, homo.")
			}
setTimeout(fuckUpUser,20000);
function fuckUpUser(){
	alert("Douche.")
}
var word = "bottles";
var count = 99;
while(count>0){
  console.log(count + " " + word + " of beer on the wall,");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pas it around,");
  count = count - 1;
  if (count>0){
    console.log(count + " " + word + " of beer on the wall.");
  }else{
    console.log("No more " + word + " of beer on the wall.");
  }
}