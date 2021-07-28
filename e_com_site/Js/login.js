var LoginForm=document.getElementById("LoginForm");
var RegForm= document.getElementById("RegForm");
var Indicator=document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";

}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";

}



/*
=================================
login Validation
=================================
*/
{
const form = document.getElementById('LoginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const Vpassword = document.getElementsByClassName("toggle-password");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
	
	
	if(usernameValue === '') {
		setErrorFor(username, '**Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

    if(passwordValue === '') {
		setErrorFor(password, '**Password cannot be blank');
    }
    else {
            setSuccessFor(password);
        }
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

Vpassword[0].addEventListener('click', function(){
          Vpassword[0].classList.toggle("active");
          if(password.getAttribute("type")=="password"){
             password.setAttribute("type","Text");
         }
       else{
        password.setAttribute("type","password");   
       }
});


}


/*
===================================
Registration Form Validation
===================================
*/{
const formReg = document.getElementById('RegForm');
const usernameReg = document.getElementById('usernameReg');
const email = document.getElementById('email');
const passwordReg = document.getElementById('passwordReg');
const passwordReg2 = document.getElementById('passwordReg2');
const VpasswordReg = document.getElementsByClassName("toggle-password1");

formReg.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValueReg = usernameReg.value.trim();
	const emailValue = email.value.trim();
	
	
	if(usernameValueReg === '') {
		setErrorFor(usernameReg, '**Username cannot be blank');
	} else {
		setSuccessFor(usernameReg);
	}
	
	if(emailValue === '') {
		setErrorFor(email, '**Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, '**Not a valid email');
	} else {
		setSuccessFor(email);
	}
}


formReg.addEventListener('keyup',function(){
     checkpassInputs();
});
 function checkpassInputs(){
	const passwordValueReg = passwordReg.value.trim();
	const password2Value = passwordReg2.value.trim();

	if(passwordValueReg === '') {
		setErrorFor(passwordReg, '**Password cannot be blank');
	}else if(passwordValueReg.length < 8){
		setErrorFor(passwordReg, '**Must have minimum 8 characters');
	}else if(passwordValueReg.search(/[A-Z]/)==-1){
		setErrorFor(passwordReg, '**Must Contain one UpperCase');
	}else if(passwordValueReg.search(/[a-z]/)==-1){
		setErrorFor(passwordReg, '**Must Contain one lowercase');
	}else if(passwordValueReg.search(/[0-9]/)==-1){
		setErrorFor(passwordReg, '**Must Contain one Numerical');
	}else if(passwordValueReg.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\>\?\:\;\,\.\'\"]/)==-1){
		setErrorFor(passwordReg, '**Must Contain 1 Special Character');
	}
	 else {
		setSuccessFor(passwordReg);
	}
	
	if(passwordValueReg !== password2Value) {
		setErrorFor(passwordReg2, '**Passwords does not match');
	} else{
		setSuccessFor(passwordReg2);
	}
 }

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

VpasswordReg[0].addEventListener('click', function(){
          VpasswordReg[0].classList.toggle("active");
          if(passwordReg.getAttribute("type")=="password"){
             passwordReg.setAttribute("type","Text");
         }
       else{
        passwordReg.setAttribute("type","password");   
       }
});


}
