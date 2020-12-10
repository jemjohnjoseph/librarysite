const fullname = document.querySelector("input#fullname");
const phno = document.querySelector("input#phno");
const email=document.querySelector("input#email");
const password=document.querySelector("input#password");
const password2=document.querySelector("input#password-confirm");

function registerValidate()
{   
   
    let emailerr=document.getElementById("email-error");
    let passerr=document.getElementById("password-error");
    let passerr2=document.getElementById("cpassword-error");
    let nameerr=document.getElementById("name-error");
    let phnoerr=document.getElementById("phno-error");

    let emailCheck= /^([a-zA-Z0-9\._]{1,30})@([a-zA-Z0-9\-]{1,20}).([A-Za-z]{2,6})?.([a-zA-Z]{2,5})/;
    let phnoCheck= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let passwordCheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/
 
    var flag;
    //FULL NAME
    if(fullname.value.trim() =="" || fullname.value.trim()== 'null')
    {
        nameerr.innerHTML = "Enter your name here..."
        flag=1;
    }
    else flag=0;
     //EMAIL
    if(email.value.trim() =="" || email.value.trim()== 'null')
    {
        emailerr.innerHTML = "Enter your e-mail id here..."
        flag=1;
    }
    if(emailCheck.test(email.value)){
         flag=0;
    }
    else{
        emailerr.innerHTML = "Invalid Format, Please Check Again";
        flag=1;
    }
    //PH NO
    if(phno.value.trim() =="" || phno.value.trim()== 'null')
    {
        phnoerr.innerHTML = "Enter your contact number..."
        flag=1;
    }
    if(phnoCheck.test(phno.value)){
         flag=0;
    }
    else{
        phnoerr.innerHTML = "Invalid Format";
        flag=1;
    }
    //PASSWORD -1
    if(password.value.trim() =="" || password.value.trim()== 'null')
    {
        passerr.innerHTML = "Enter your strong password here.."
        flag=1;
    }
    if(passwordCheck.test(password.value)){
         flag=0;
    }
    else{
        passerr.innerHTML = "Password should be minimum 8 characters, at least one uppercase,one lowercase ,one special character and one number";
        flag=1;
    }
    //PASSWORD-2
    if(password2.value.trim() =="" || password2.value.trim()== 'null')
    {
        passerr2.innerHTML = "Enter your password to confirm...."
        flag=1;
    }
    
    else if(password2.value !== password.value)
        {
            passerr2.innerHTML = "Passwords not matching"
            flag=1;
        }
     else{
          flag=0;
     }   

    if(flag==1){
        return false;
    }

}
