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
var txt = "Hello There! My name is Aashiq, Welcome to my online portfolio";
var spd = 80;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, spd);
  }
}
//end typewriter

//img enlarge
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

//display
function display() {
  if (document.getElementById("mywhatsapp").innerHTML == "Whatsapp") {
    document.getElementById("mywhatsapp").innerHTML = "0732581571";
  } else if (document.getElementById("mywhatsapp").innerHTML == "0732581571") {
    document.getElementById("mywhatsapp").innerHTML = "Whatsapp";
  }
  if (document.getElementById("myemail").innerHTML == "Email") {
    document.getElementById("myemail").innerHTML = "adams.aashiq@gmail.com";
  } else if (
    document.getElementById("myemail").innerHTML == "adams.aashiq@gmail.com"
  ) {
    document.getElementById("myemail").innerHTML = "Email";
  }
}
