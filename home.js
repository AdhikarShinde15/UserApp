const currentUsersID = JSON.parse(localStorage.getItem('currentUser'))

const userData = getUserData()
const currentUser = userData.find((dataObject) => dataObject.id === currentUsersID) 

let userEmail
let userPass
let userDob

const p = document.getElementsByClassName('email-msg')
const dobMsg = document.getElementsByClassName('dob-msg')
const passMsg = document.getElementsByClassName('pass-msg')
document.querySelector('#updateEmail').addEventListener('input' , e => {
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

document.querySelector('#updateDob').addEventListener('input' , e => {
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

document.querySelector('#updatePass').addEventListener('input', e => {
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

document.querySelector('#close').addEventListener('click', e => {
    e.preventDefault()
    document.getElementById("myForm").style.display = "none";
})

document.querySelector('#logout').addEventListener('click', e => {
         localStorage.removeItem('currentUser');
})

document.querySelector('#delete').addEventListener('click', e => {

    document.getElementById("deleteUserPopup").style.display = "block";
    document.querySelector('#no').addEventListener('click' , e => {
        document.getElementById("deleteUserPopup").style.display = "none";
    })

    document.querySelector('#yes').addEventListener('click', e => {
        let deleteIndex
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            deleteIndex = userData.indexOf(dataObject)
        }) 
        userData.splice(deleteIndex, 1);
        localStorage.removeItem('userData');
        localStorage.setItem('userData',JSON.stringify(userData))
        localStorage.removeItem('currentUser');
        window.location.href = "http://127.0.0.1:5501/UserApp/login.html";
    })

})

renderData= () => {

const usersName = document.getElementsByClassName('username')
const usersEmail = document.getElementsByClassName('email')
const usersPhone = document.getElementsByClassName('phone')
const usersPosition = document.getElementsByClassName('position')
const usersDob = document.getElementsByClassName('h-dob')

usersEmail[0].innerText = `${currentUser.userEmail}`
usersName[0].innerHTML = `${currentUser.userName}`
usersPhone[0].innerHTML = `${currentUser.userPhone}`
usersPosition[0].innerHTML = `${currentUser.position}` 
usersDob[0].innerHTML =  `${currentUser.userDob}`
}
renderData()
document.querySelector('#userUpdate').addEventListener('submit',(e) => {
    e.preventDefault()
    const name =  document.getElementById('updateName').value
    if(name !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userName = name
        }) 
    }
    
    const email =  document.getElementById('updateEmail').value
    if(email !== '' && mailFlag ===1){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userEmail = email
        }) 
    }
    // else if(mailFlag !== null){
    //     e.preventDefault()
    // }
    
    const phone =  document.getElementById('updatePhone').value
    if(phone !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userPhone = phone
        }) 
    }

    const position =  document.getElementById('updatePosition').value
    if(position !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.position = position
        }) 
    }
    
    const dob =  document.getElementById('updateDob').value
    if(dob !== '' && dobFlag === 1){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userDob = dob
        }) 
    }
    // else if(dobFlag !== null){
    //     e.preventDefault()
    // }
    
    const pass =  document.getElementById('updatePass').value
    if(pass !== '' && passFlag === 1){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userPass = pass
        }) 
    }
    // else if(passFlag !== null){
    //     e.preventDefault()
    // }
    
    localStorage.removeItem('userData');
    localStorage.setItem('userData',JSON.stringify(userData))
    document.getElementById("myForm").style.display = "none";
    renderData()
})

