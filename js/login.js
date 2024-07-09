
let loginEmail=document.getElementById("loginEmail");

let loginPass=document.getElementById("loginPass");

let signEmail=document.getElementById("signEmail");

let signPass=document.getElementById("signPass");

let signPass2=document.getElementById("signPass2");

let login=document.getElementById("logbtn");

let signin=document.getElementById("signbtn");



signin.onclick=function(){
    console.log(signEmail.value);
    console.log(signPass.value);
    console.log(signPass2.value);


    if(! emailTest(signEmail.value)){

        // alert("invalid email");

 Swal.fire({
    icon: 'error',
    title: 'invalid email',
    text: 'email must  start with a letter, followed by up to 10 additional characters that can be letters, digits,or [ ., _, -, ]and end with @gmail.com',
    
  });

        return false;
    }
 
    if(!(signPass.value==signPass2.value)){
       // alert("the password and confirm password are not the same ");

       Swal.fire({
        icon: 'error',
        title: 'wrong password',
        text: 'the password and confirm password are not the same ',
        
      });

        return false;
    }
    setCookie("Email",signEmail.value,1);
    setCookie("password",signPass.value,1);

    // alert("SignIn successfully");
    // window.close();
    // window.open("http://127.0.0.1:5500/index2.html");

    let timerInterval
    Swal.fire({
      title: 'Loading !',
      //html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
    
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
     window.close();
    window.open("index2.html");
      }
    });


// E:\training\web\RRS WEB\index2.html
 

    return false;


    }


    login.onclick=function(){
        console.log(loginEmail.value);
        console.log(loginPass.value);

        if(! emailTest(loginEmail.value)){

           // alert("invalid email");
           
           Swal.fire({
            icon: 'error',
            title: 'invalid email',
            text: 'email must  start with a letter, followed by up to 10 additional characters that can be letters, digits,or [ ., _, -, ]and end with @gmail.com',
            
          });
           
            return false;

        }

        console.log(getCookie("Email"));
        console.log(getCookie("password"));


        if((getCookie("Email")==loginEmail.value)&&(getCookie("password")==loginPass.value)){ 
            // alert("Welcome tona");
            // alert("Login successfully");
            // window.close();
            // window.open("http://127.0.0.1:5500/index2.html");


            let timerInterval
            Swal.fire({
              title: 'Loading !',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
            
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
             window.close();
             window.open("hhttp://127.0.0.1:5500/RRS%20WEB/index2.html");
              }
            });
        

             return false;
            }
        else{

            // alert("Not Found Please SignIn");
            
            Swal.fire({
                icon: 'error',
                title: 'Not Found',
                text: 'Please SignIn First',
      
              });
              
             return false;
            }
        }



    function setCookie(name,value,exp){

        let d=new Date();
        d.setTime(d.getTime()+(exp*24*60*60*1000));
        let date= d.toUTCString();
        console.log(date);
        let expires="expires="+date+";";
        document.cookie=name+"="+value+";"+expires+"path=/";
    }
    function deleteCookie(name){
        setCookie(name,null,null);
    }
    
    function getCookie(name){
       let decode =decodeURIComponent(document.cookie)
       let carr=decode.split("; ");
      let res=null;
      carr.forEach((element)=>{
        if(element.indexOf(name)==0){
        res=element.substring(name.length+1);
        }
      });
       return res;
    }

 window.addEventListener("keydown",function(event){

    console.log(event.key);
    if(event.key=="Escape"){


        window.close();
        window.open("http://127.0.0.1:5500/index.html");
      
    }

 });


 function emailTest(x){
    em=x;
 const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]{0,10}@gmail\.com$/; 
 validEmail = emailRegex.test(em)
 console.log(validEmail);
return validEmail;
}

// function passwordTest()
// {
//    let  pass=document.getElementById("pas" ).value;
//     const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9]).{6,}$/;

//     const validPassword = passwordRegex.test(pass);
//     console.log(validPassword);
//     console.log(pass);
//     return validPassword;

// }
// document.getElementById("submitBtn").onclick = function(){
    
    
//     if(emailTest()){
//         alert("valid email");
//     }
//     else{
//         alert("invalid email");
//     }

//     if(passwordTest()){
//         alert("valid pass");
//     }
//     else{
//         alert("invalid pass");
//     }
    


// }


