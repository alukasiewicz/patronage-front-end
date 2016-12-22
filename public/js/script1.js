var counter=0;
function clicker(){

  counter++;
  document.getElementById("clickCount").innerHTML = zero(counter);

}
function zero(i) {
    return (i < 10)? '0'+i : i;
}
