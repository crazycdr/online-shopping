var pagetop,yPos,menu;
function yScroll(){
	
	pagetop=document.getElementById('topimg');
	
	menu=document.getElementById('menu');
	yPos=window.pageYOffset;
	if(yPos>180){
		
		pagetop.style.background="#EFEFE7";
		
	}
	else{
		pagetop.style.background="#EFEFE7";
	}
}
window.addEventListener("scroll",yScroll);