

function fading(){
  var profile = document.querySelectorAll(".page-profile-info");
  for (var i = 0; i < profile.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = profile[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      profile[i].classList.add("active");
    } else {
      profile[i].classList.remove("active");
    }
}
}

window.addEventListener("load", fading)

// page links


