
const userData = getUserData()


const p = document.getElementsByTagName('p')
const passMsg = document.getElementsByClassName('pass-msg')
let userEmail
let userPass

let mailFlag
let passFlag



document.querySelector('#for-email').addEventListener('input', e => {
   userEmail = e.target.value
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const inputEmailId = e.target.value;
    if(inputEmailId.match(mailformat)){
      mailFlag = 1 
     validMailDisplay();
    }
    else{
      mailFlag = 0
      InvalidMailDispaly();
    }
       
     
})

document.querySelector('#for-pass').addEventListener('input', e => {
      userPass = e.target.value
     if(e.target.value.length<=8){
       passFlag = 0
      invalidPasswordDisplay();
     }
     else{
       passFlag = 1
      validPasswordDisplay();
     }
})

document.querySelector('#userlogin').addEventListener('submit', (e) => {
  e.preventDefault()
  
  if(mailFlag === passFlag){
    const enteredEmail = userEmail
    const enteredPass = userPass
    if(userData.find((dataObject) => dataObject.userEmail === enteredEmail)){
      const currentUser= userData.find((dataObject) => dataObject.userEmail === enteredEmail)
    
    if(currentUser.userPass === enteredPass && currentUser !== null )
    window.location.href = "https://www.google.com/";
    else {
      incorrectEmail()
      incorrectPass()
    }
    }else {
      incorrectEmail()
      incorrectPass()
    }
    
  }
  
})
