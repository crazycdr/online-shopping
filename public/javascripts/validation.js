function validate(){
	
	var name=document.getElementById("fname");
	
	if(name.value=="")
	{
		
	name.focus()
	name.style.border=" solid 3px red";
 return false;
	}
}
