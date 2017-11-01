function pincodes(){
	
	var name=document.getElementById("pincode");
	if(name.value.length!=6){
		alert("Enter 6 Digit Code");
		name.focus();
		name.style.borderBottom="solid 3px red";
		return false;
	}
}
function lettersOnly(input){
	
	var regex=/[^0-9]/gi;
	input.value=input.value.replace(regex,"");
	
	
	

}
