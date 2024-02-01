function openTab(evt, tabAction) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabAction).style.display = "block";
    evt.currentTarget.className += " active";
}

var registerBtn = document.querySelector( `[type="submit"] `)
var registerFname = document.querySelector("input#fname")
var registerLname = document.querySelector("input#lname")
var registerEmail = document.querySelector("input#email")
var registerPassword = document.querySelector("input#password")
var inputRequired = document.querySelectorAll( `#register input:required `)

registerBtn.addEventListener("click", function (e){
  e.preventDefault()
  var emptyTag = 0
  inputRequired.forEach((input)=>{
    if(input.value===""){
      input.style.outline = "1px solid red"
      emptyTag = 1
    }
  })
  if (emptyTag==0){
    localStorage.setItem("fname", registerFname.value)
    localStorage.setItem("lname", registerLname.value)
    localStorage.setItem("email", registerEmail.value)
    localStorage.setItem("password", registerPassword.value)
    window.location ="login.html"
  }
  else {
    alert("*field must be filled out")
  }
})

var loginBtn = document.querySelector("#btn_login")
var loginEmail = document.querySelector("input#login_email")
var loginPassword = document.querySelector("input#login_password")

loginBtn.addEventListener("click", function (e) {
  e.preventDefault()
  if ((localStorage.getItem("email").trim()!==loginEmail.value.trim())||(localStorage.getItem("password").trim()!==loginPassword.value.trim())){
    alert("check that your data is correct")
  }
  else {
    setTimeout(function(){
      history.back()
    },500)
  }
})


