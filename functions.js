const validMailDisplay = () => {
    p[0].innerText = "Valid Email ID"
    p[0].style.color = '#02a88e'
}

const InvalidMailDispaly = () => {
    p[0].innerText = "Invalid Email ID"
    p[0].style.color = '#d32757'
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