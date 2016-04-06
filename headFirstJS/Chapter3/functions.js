function fuckFace(x,y){
	var tool = x*x+y*y;
	var homo = x/y+42;
	var freakShow = 21;
	if(x < y){
		console.log(tool);
	}else if(x > y){
		console.log(homo);
	}else{
		console.log(freakShow*2);
	}
}
fuckFace(2,5);