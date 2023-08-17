const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwhyz";
const numbers = "0123456789";
const characters = "!@#$%^&*()_+<`>?|";

const password = document.getElementById("password");
const length = document.getElementById("ps-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbols");

document.getElementById("generate").addEventListener("click", function() {
    let newPassword = "";

    if(length.value <= 0) {
        alert("Invalid length");
    }

    if(uppercase.checked == false && lowercase.checked == false && number.checked == false && symbol.checked == false){
        alert("Check atleast 1 checkbox below");
    } 
    else {
        while(newPassword.length <= length.value){
            if(uppercase.checked == true) {
                newPassword += upperLetters[Math.floor(Math.random() * upperLetters.length)];
            }
            if(lowercase.checked == true) {
                newPassword += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
            }
            if(number.checked == true) {
                newPassword += numbers[Math.floor(Math.random() * numbers.length)];
            }
            if(symbol.checked == true) {
                newPassword += characters[Math.floor(Math.random() * characters.length)];
            } 
            
        }
    }
    
    password.value = newPassword.slice(0, newPassword.length - 1);
    
});

document.getElementById("copy").addEventListener("click", function() {
    password.select();
    document.execCommand("copy");
});