let signupName = document.getElementById("signupName")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")
let signUpBtn = document.getElementById("signUpBtn");
let alertMessage = document.getElementById("alertMessage")

let userData = [];

if (localStorage.getItem("Users") != null) {
    userData = JSON.parse(localStorage.getItem("Users"));
}

function signUp() {
    let data = {
        userName: signupName.value,
        userEmail: signupEmail.value,
        userPassword: signupPassword.value
    }
    if (checkInputsEmpty() == true) {
        getAlertMessage("All Inputs Required", "red")
    } else if (checkEmail() == true) {
        getAlertMessage("Email Aready Esist", "red")
    } else {
        userData.push(data)
        localStorage.setItem("Users", JSON.stringify(userData))
        clearForm();
        getAlertMessage("Sucess", "green")
    }
}
signUpBtn.addEventListener("click", signUp)

function getAlertMessage(text, color) {
    alertMessage.classList.replace('d-none', 'd-block')
    alertMessage.innerHTML = text
    alertMessage.style.color = color
}
function clearForm() {
    signupName.value = ''
    signupEmail.value = ''
    signupPassword.value = ''
}
function checkInputsEmpty() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        return true
    } else return false
}

function checkEmail() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].userEmail == signupEmail.value)
            return true
    }
}
