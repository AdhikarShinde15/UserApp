currentUsersID = JSON.parse(localStorage.getItem('currentUser'))

const userData = getUserData()
const currentUser = userData.find((dataObject) => dataObject.id === currentUsersID) 

const usersName = document.getElementsByClassName('username')
const usersEmail = document.getElementsByClassName('email')
const usersPhone = document.getElementsByClassName('phone')
const usersPosition = document.getElementsByClassName('position')

usersEmail[0].innerText = `${currentUser.userEmail}`
usersName[0].innerHTML = `${currentUser.userName}`
usersPhone[0].innerHTML = `${currentUser.userPhone}`
usersPosition[0].innerHTML = `${currentUser.position}` 