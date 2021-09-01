
let userData = JSON.parse(localStorage.getItem('userData'))
// console.log( uuidv4())

const p = document.getElementsByTagName('p')
const passMsg = document.getElementsByClassName('pass-msg')
let userEmail
let userPass
let userDob
let mailFlag
let passFlag
let dobFlag


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
       passFlag = 1
      invalidPasswordDisplay();
     }
     else{
       passFlag = 0
      validPasswordDisplay();
     }
})

document.querySelector('#userlogin').addEventListener('submit', (e) => {
  e.preventDefault()
   const enteredEmail = document.getElementById('for-email').value
   const enteredPass = document.getElementById('for-pass').value
   
 const currentUser= userData.filter((dataObject) => dataObject.userEmail === enteredEmail)
 console.log(currentUser)
  
})

