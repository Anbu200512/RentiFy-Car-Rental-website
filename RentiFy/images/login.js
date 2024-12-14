const form = document.querySelector('#form1');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    
    if(usernameval==''){
        seterror(username ,'username is required')
    }
    else{
        setsuccess(username)
    }

    if(emailval==''){
        seterror(email,'email is required')
    }
    else{
        setsuccess(email)
    }

    if(passwordval ===''){
        seterror(password,'password is required')
    }
    else if(passwordval.length<8){
        seterror(password,'password must be 8 characters')
    }
    else{
        setsuccess(password)
    }
    
    if(cpasswordval ===''){
        seterror(password,'confirm password is required')
    }
    else if(cpasswordval!==passwordval){
        seterror(password,'password dose not match')
    }
    else{
        setsuccess(cpassword)
    }
}

function seterror(element,message){
    const form1=element.parentElement;
    const errorElement=form1.querySelector('.error')

    errorElement.innerText='message';
    form1.classList.add('error')
    form1.classList.remove('success')
}
function setsuccess(element){
    const form1=element.parentElement;
    const errorElement=form1.querySelector('.error')

    errorElement.innerText='';
    form1.classList.add('success')
    form1.classList.remove('error')
}
const validateEmail =(email) =>{
    return String(email)
    .toLowerCase()
};