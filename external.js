//external.js

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  function submitForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
	  var password = document.getElementById('password').value;
      var message = document.getElementById('message').value;
	  var subscribe = document.getElementById('subscribe').checked;
      var thankYouDiv = document.getElementById('thankYouMessage');
      
      console.log("Name: " + name);
	  console.log("Email: " + email);
	  console.log("Password: " + password);
      console.log("Message: " + message);
	   console.log("Subscribe to newsletter: " + subscribe);
      
      // Hide the form
      var form = document.querySelector('form');
      form.style.display = 'none';
      
      // Show the thank you message
      thankYouDiv.style.display = 'block';
    }