let signinEmail = document.getElementById("signinEmail")
let signinPassword = document.getElementById("signinPassword")
let loginBtn = document.getElementById("login")
let incorrect = document.getElementById("incorrect")

let uersData = [];
if (localStorage.getItem('Users') != null) {
    uersData = JSON.parse(localStorage.getItem("Users"))
}
function logIn() {
    if (checkInputsEmpty() == true) {
        getAlertMessage("All Inputs Required", "red")
    } else {
        if (checkEmailPassword() == true) {
            window.location.href = 'home.html'
        } else {
            getAlertMessage("Email or Password NotCorrect", "red")
        }
    }
}
function checkEmailPassword() {
    for (let i = 0; i < uersData.length; i++) {
        if (uersData[i].userEmail == signinEmail.value && uersData[i].userPassword == signinPassword.value) {
            localStorage.setItem("userName", uersData[i].userName)
            return true
        }
    }
}
function getAlertMessage(text, color) {
    incorrect.classList.replace('d-none', 'd-block')
    incorrect.innerHTML = text
    incorrect.style.color = color
}
function checkInputsEmpty() {
    if (signinEmail.value == '' || signinEmail.value == '') {
        return true
    } else return false
}
loginBtn.addEventListener("click", logIn)
