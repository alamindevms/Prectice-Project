// Navbar Sticky

	window.onscroll = function() {navSticky()};

	// Get the navbar
	var navbar = document.getElementById("mainNav");

	var sticky = navbar.offsetTop;

	function navSticky() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}


	// Right Slid Button Active Color

	var actId = document.getElementById("actId");
	var act = actId.getElementsByClassName("act");

	for (var i = 0; i < act.length; i++) {
	  act[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}


	$(document).ready(function(){
	    $(window).scrollTop(0);
	});