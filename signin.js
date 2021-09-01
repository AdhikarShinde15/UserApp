let userData = JSON.parse(localStorage.getItem('userData'))

const dobMsg = document.getElementsByClassName('dob-msg')
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
 

document.querySelector('#for-dob').addEventListener('input' , e => {
  userDob = e.target.value
  const splitdate = (e.target.value).split('-')
  const today = new Date()
  const currentYear = today.getFullYear()

  if(currentYear-splitdate[0] >= 15){
    dobFlag = 1
    validDate()
  }
  else{
    dobFlag = 0
    invalidDate()
  }
})

document.querySelector('#newuser').addEventListener('submit', (e) => {
  // if(mailFlag === passFlag === dobFlag === 1){
     userData.push({
     id : uuidv4(),
     userEmail : userEmail,
     userPass : userPass,
     userDob : userDob,
     position : document.getElementById('position').value
  })
  
  localStorage.setItem('userData',JSON.stringify(userData))
// } 
})
