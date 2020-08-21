let lastnameInput = document.getElementById("lastnameInput");
let firstnameInput = document.getElementById("firstnameInput");
let phoneNumber = document.getElementById("phoneNumberInput");
let messageInput = document.getElementById("userMessage");
let lettersLeft  = document.getElementById("lettersLeft");
let mainB = document.getElementsByTagName("main");

let errorMessage = document.createElement("p");
errorMessage.style.backgroundColor = "red";

mainB.appendChild(errorMessage);


const PHONEREGEX = /^0[6,7]{1}[0-9]{8}/g;
const MESSAGEMAXLENGTH = 400;


// Test si il y a des nombres dans la chaine de caratère
function hasNumber (myString){
    return /\d/.test(myString);
}



messageInput.addEventListener("keypress", function(){
    let currentMessageLength = MESSAGEMAXLENGTH - this.value.length - 1;
    console.log(`nombre de lettres dans le msg ${this.value.length}`);
    if (currentMessageLength < 400){
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
    lettersLeft.innerHTML = currentMessageLength + " caractères restant (max 400)";
});

function submit() {
    if (hasNumber(lastnameInput.value) || lastnameInput.value.length < 2 || lastnameInput.value.length > 50){
        lastnameInput.style.borderColor = "red";
    } else {
        lastnameInput.style.borderColor = "green";
    }
    if (hasNumber(firstnameInput.value) || firstnameInput.value.length < 2 || firstnameInput.value.length > 50){
        firstnameInput.style.borderColor = "red";
    } else {
        firstnameInput.style.borderColor = "green";
    }

    if (!PHONEREGEX.test(phoneNumber.value)){
        phoneNumber.style.borderColor = "red";
    } else {
        phoneNumber.style.borderColor = "green";
    }
}

