
var state=false;
  function expand(){
    if(state==false){
      document.getElementById('items').style.transform='scaleX(1)';  
        state=true;
  }
    else{
      document.getElementById('items').style.transform='scaleX(0)';
      document.getElementById('toggle1').style.transform='rotate(0deg)';
	state=false;
  }
}