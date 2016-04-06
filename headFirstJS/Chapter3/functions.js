function fuckFace(x,y){
	var tool = x*x+y*y;
	var homo = x/y+42;
	var freakShow = 21;
	if(x<y){
		document.write(tool);
	}else if(x>y){
		document.write(homo);
	}else{
		document.write(freakShow*2);
	}
}
fuckFace(2,5);