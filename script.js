

function generatePassword(text) {
    if (text === '') {
        text = "Please enter a length from 8 to 128";
    }
    var length = parseInt(window.prompt(text, ""));
    checkNumber(length);
}

function checkNumber(length) {

    if (length <= 128 && length >= 8) {
        alert("Your length (" + length + ")  matches requirements", "");
    } else if (isNaN(length)) {
        generatePassword("It is not a length. Please enter a length from 8 to 128", "");
    } else {
        generatePassword("Your length (" + length + ") is not between 8 and 128", "");
    }

}


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
