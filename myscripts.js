//function myFunction() {
//  var x = document.getElementById("myLinks");
//  if (x.style.display === "block") {
//    x.style.display = "none";
//  } else {
//    x.style.display = "block";
//  }
//}

// Toggle responsive navigation
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Close dropdown menu on click outside
document.addEventListener("click", function(e) {
  var dropdowns = document.querySelectorAll(".dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
      if (!dropdowns[i].contains(e.target)) {
          dropdowns[i].style.display = "none";
      }
  }
});

function openSemester(evt, Semester) {
// Declare all variables
  var i, tabcontent, tablinks;
  
// Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
// Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
// Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
