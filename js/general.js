var links = document.querySelector(".navbar")
var scrollY = 0
var cartBadge = document.querySelector(".badge-cart")
if(localStorage.getItem("cartArray")==="" || localStorage.getItem("cartArray")===null){
  cartBadge.style.display="none"
}
else{
  cartBadge.style.display="block"
  cartBadge.innerHTML = localStorage.getItem("cartArray").split(",").length
}



function reveal() {
  if (window.pageYOffset>scrollY){
    console.log(scrollY, "hello")
    links.classList.remove("navbar-expand-md")
  }
  else {
    links.classList.add("navbar-expand-md")
  }
  
  var reveals = document.querySelectorAll(".sec-item")
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
  }
}
window.addEventListener("scroll", reveal);

// window-scroll//////////////////////////////////////////////////////////////////////////

var userIcon = document.querySelector("i.user")
var logoIcon = document.querySelector(".logo")
userIcon.addEventListener("click", function(){
  setTimeout(()=>{
    window.location = "login.html" 
  },500)
})

logoIcon.addEventListener("click", function(){
    setTimeout(()=>{
        window.location = "index.html" 
    },300)
})

// user-icon ///////////////////////////////////////////////////////////////////
var bagIcon = document.querySelector("a.bag-icon")
bagIcon.addEventListener("click", function(){
  window.location = "baglist.html" 
})



// bag-icon ///////////////////////////////////////////////////////////////////

var footerContent = document.querySelectorAll(".dropdown-content")
var arrowIcon = document.querySelectorAll("svg")


function dropdownFunction (id) {
    if(footerContent[id].style.display ==="none"){
        for(let i=0 ; i< footerContent.length; i++){
            footerContent[i].style.display = "none"
            arrowIcon[id].style.transform = "rotate(0deg)"
        }
        
        footerContent[id].style.display = "block"
        arrowIcon[id].style.transform = "rotate(180deg)"
    }
    else{

        footerContent[id].style.display = "none"
        arrowIcon[id].style.transform = "rotate(0deg)"
    }
    

}

function updateSize(){
    if(window.innerWidth>"768"){
        for(let i=0 ; i< footerContent.length; i++){
            footerContent[i].style.display = "block"
        }
    }
    else{
        for(let i=0 ; i< footerContent.length; i++){
            footerContent[i].style.display = "none"
        }
    }
}
window.addEventListener("resize", updateSize);
// footer-resize //////////////////////////////////////////////////////////

var userFname  = localStorage.getItem("fname")
var userLname  = localStorage.getItem("lname")
var userProfile = document.querySelector("p.username")
var userIcon = document.querySelector("i.user")
var divProfile = document.querySelector("div.divprofile")
var logoutBtn = document.querySelector("a.logout")
var userFullName = document.querySelector("h3.userfullname")

window.addEventListener("load", ()=>{
  if(localStorage.getItem("email")!==null){
    userProfile.innerHTML = userFname[0].toUpperCase()+userLname[0].toUpperCase()
    userProfile.classList.remove("d-none")
    userIcon.classList.add("d-none")
    userFullName.innerHTML= userFname.toUpperCase()+" "+userLname.toUpperCase()
  }
  else{
    userProfile.classList.add("d-none")
    userIcon.classList.remove("d-none")
  }
  
} )
// window reload 

userProfile.addEventListener("click", ()=> {
  if(divProfile.classList[1]==="d-none"){
    divProfile.classList.remove("d-none")
  }
  else{
    divProfile.classList.add("d-none")
  }
})

// hide and appear the user profile

logoutBtn.addEventListener("click",()=>{
  localStorage.clear()
  window.location="login.html"
})

// logout event