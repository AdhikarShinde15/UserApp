const p = document.getElementsByTagName('p')
const passMsg = document.getElementsByClassName('pass-msg')

document.querySelector('#for-email').addEventListener('input', e => {
 
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const inputEmailId = e.target.value;
    if(inputEmailId.match(mailformat)) 
     validMailDisplay();
    else
     InvalidMailDispaly();  
     
})

document.querySelector('#for-pass').addEventListener('input', e => {
      
     if(e.target.value.length<=8)
       invalidPasswordDisplay();
     else
       validPasswordDisplay();
     
})