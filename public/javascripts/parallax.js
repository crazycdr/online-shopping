var pagetop,yPos,menu;
function yScroll(){
	
	//pagetop=document.getElementById('purchase1');
	//pagetop2=document.getElementById('purchase3');
	pagetop3=document.getElementById('purchase4');
	pagetop4=document.getElementById('purchase5');
	//alert("hello");
	//menu=document.getElementById('menu');
	yPos=window.pageYOffset;
	//if(yPos>540 && yPos<2000){
		
		//pagetop3.style.left="200px";
		//pagetop4.style.right="300px";
	//}
	//else if(yPos>3000)
	//{
		//pagetop3.style.bottom="200px";
		//pagetop4.style.bottom="200px";
	//}
	//else{
		//pagetop.style.left="100px";
		//pagetop2.style.right="200px";
		//pagetop3.style.bottom="-100px";
		//pagetop4.style.bottom="-100px";
	//}
	
}
window.addEventListener("scroll",yScroll);