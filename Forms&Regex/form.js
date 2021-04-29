console.log("Form Validation Using RegExp");
const name = document.getElementById('name');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');

let validEmail = false;
let validPhone = false;
let validUser = false;


//console.log(name,mail,phone);

name.addEventListener('input', ()=>{
	console.log('Username is blur');
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = name.value;
	console.log(regex, str);
	if(regex.test(str)){
		console.log('Your name is valid');
		name.className = 'success';
		validUser = true;
		
		
	}else{
		console.log('Your name is not valid');
		name.className = 'error';
	}
});

mail.addEventListener('blur', ()=>{
	console.log('mail is blur');
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
	
	let str = mail.value;
	console.log(regex, str);
	if(regex.test(str)){
		console.log('Your email is valid');
		name.className = 'success';
		validEmail = true;
	}else{
		console.log('Your email is not valid');
		name.className = 'error';
	}
});

phone.addEventListener('blur', ()=>{
	console.log('phone is blur');
	let regex = /^([6-9])([0-9]){9}$/;
	let str = phone.value;
	console.log(regex, str);
	if(regex.test(str)){
		console.log('Your phone is valid');
		name.className = 'success';
		validPhone=true;
	}else{
		console.log('Your phone is not valid');
		alert('Your phone number must be 10 digits long only');
		name.className = 'error';
	}	
});

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
		validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        validPhone = false;
        
    }
})

/*let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
       
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
       
        }
   
})*/