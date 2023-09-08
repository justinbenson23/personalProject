var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


function dmgPhases() 
{ 
        num1 = document.getElementById("boss").value;
        num2 = document.getElementById("damage").value;
document.getElementById("result").innerHTML = num1 / num2;
}
  

