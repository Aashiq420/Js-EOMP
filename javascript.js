function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

//typewriter
var i = 0;
var txt = "Hello There! \nMy name is Aashiq \nWelcome to my online portfolio";
var spd = 80;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, spd);
  }
}
