var t_counter=0;
function timer(){

  t_counter++;

  if (t_counter==30) {
    t_counter=0;
    counter=0;
    document.getElementById("clickCount").innerHTML = "00";
  }

  setTimeout("timer()",1000);
}
