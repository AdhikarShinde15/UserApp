const currentUsersID = JSON.parse(localStorage.getItem('currentUser'))

const userData = getUserData()
const currentUser = userData.find((dataObject) => dataObject.id === currentUsersID) 

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
    

    const name =  document.getElementById('updateName').value
    if(name !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userName = name
        }) 
    }
    
    const email =  document.getElementById('updateEmail').value
    if(email !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userEmail = email
        }) 
    }
    
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
    if(dob !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userDob = dob
        }) 
    }
    
    const pass =  document.getElementById('updatePass').value
    if(pass !== ''){
        userData.find((dataObject) => {
            if(dataObject.id === currentUsersID)
            dataObject.userPass = pass
        }) 
    }
    
    localStorage.removeItem('userData');
    localStorage.setItem('userData',JSON.stringify(userData))
    renderData()
})