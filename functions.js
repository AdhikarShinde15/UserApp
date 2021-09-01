const getUserData = () => {
    data = JSON.parse(localStorage.getItem('userData'))
    if(data === null)
    return []
    else
    return data
}

const validMailDisplay = () => {
    p[0].innerText = "Valid Email ID"
    p[0].style.color = '#02a88e'
}

const InvalidMailDispaly = () => {
    p[0].innerText = "Invalid Email ID"
    p[0].style.color = '#d32757'
}

const noDataRepeat = () => {
    p[0].innerHTML = "Email Already Registered Enter Different Email"
    p[0].style.color = '#d32757'
}

const incorrectEmail = () =>  {
    p[0].innerHTML = "Inncorrect Email Please Enter Correct Email"
    p[0].style.color = '#d32757'
}

const incorrectPass = () => {
    passMsg[0].innerText = "Incorrect Passeord Please Enter Correct Password"
    passMsg[0].style.color = '#d32757'
}

const invalidPasswordDisplay = () => {
    passMsg[0].innerText = "Length Should Be Greater Than 8 Characters"
    passMsg[0].style.color = '#d32757'
}

const validPasswordDisplay = () => {
    passMsg[0].innerText = "Valid Password"
    passMsg[0].style.color = '#02a88e'
}

const validDate = () => {
    dobMsg[0].innerHTML = "Valid DOB"
    dobMsg[0].style.color = '#02a88e'
}

const invalidDate = () => {
    dobMsg[0].innerHTML = "Invalid DOB User`s age should be Greater Than 15"
    dobMsg[0].style.color = '#d32757'
}