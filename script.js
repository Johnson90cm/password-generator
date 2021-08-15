// create array for each type
// create funtion 
var length
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var symbol = "!@#$%&*()_+-=[]|,./?><"


function generatePassword(text) {

    var text = parseInt(window.prompt(text, "Choose a # between 8-128"));
    
    if (text <= 128 && text >= 8) {
        length = text
        console.log(length)
        alert("good choice")

    } else if (isNaN(text)) {
        alert("Please enter a length from 8 to 128", "");
        return generatePassword()
    } else {
        alert("Your length (" + text + ") is not between 8 and 128", "");
        return generatePassword()
    }
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    var symbols = '!@#$%&*()_+-=[]|,./?><'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

/////

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
