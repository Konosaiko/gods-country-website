// Get the modal
var modal = document.getElementById("myModal");
var modalSignup = document.getElementById("myModalSignup");

// Get the button that opens the modal
var btn = document.getElementById("connectBtn");
var btnSignup = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanSignup = document.getElementsByClassName("closeSignup")[0];

// When the user clicks the button, open the modal + when the user clicks connect while in signup, switch modal
btn.onclick = function() {
  modal.style.display = "block";
  if (modalSignup.style.display = "block") {
    modalSignup.style.display = "none";
  }
}
btnSignup.onclick = function () {
  modalSignup.style.display= "block";
  if (modal.style.display = "block") {
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

spanSignup.onclick = function() {
  modalSignup.style.display ="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalSignup) {
    modalSignup.style.display = "none";
  }
}

// Get the a element that switch modal 

var switchConnect = document.getElementById("switch-connect");
var switchSignup = document.getElementById("switch-signup");

// When the user clicks connect he's redirected to connect modal

switchConnect.onclick = function() {
  modalSignup.style.display = "none";
  modal.style.display = "block";
}

// When the user clicks signup he's redirected to signup modal

switchSignup.onclick = function() {
  modal.style.display = "none";
  modalSignup.style.display = "block";
}
