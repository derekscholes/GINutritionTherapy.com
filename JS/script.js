/*var state=false;
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
}*/

//Blog Page-->//
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}