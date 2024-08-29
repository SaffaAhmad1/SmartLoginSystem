let welcomeMessage = document.getElementById("welcomeMessage")
let logOutBtn = document.getElementById("logOutBtn")

if(localStorage.getItem("userName") != null){
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("userName")}`
}

function logOut(){
    window.location.href = 'index.html'
    localStorage.removeItem("userName")
}
logOutBtn.addEventListener("click" ,logOut)