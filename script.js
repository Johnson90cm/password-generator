// create array for each type
// create funtion 
var length
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var symbol = "!@#$%&*()_+-=[]|,./?><"

function selector (text) {

    var text = parseInt(window.prompt(text, "Choose a # between 8-128"));
    
    if (text <= 128 && text >= 8) {

        length = text

    } else if (isNaN(text)) {
        alert("Please enter a length from 8 to 128", "");
        return selector()
    } else {
        alert("Your length (" + text + ") is not between 8 and 128", "");
        return selector()
    }
}

function generatePassword() {

    var confirmArr = [lowerCaseConfirm, upperCaseConfirm, numberConfirm, symbolConfirm]
    var lowerCaseConfirm = window.confirm("Would you like to include Lowercase?")
    var upperCaseConfirm = window.confirm("Would you like to include Uppercase?")
    var numberConfirm = window.confirm("Would you like to include Numbers?")
    var symbolConfirm = window.confirm("Would you like to include Symbols?")
    console.log(lowerCaseConfirm, upperCaseConfirm, numberConfirm, symbolConfirm)

    for (i = 0; i < confirmArr.length; i++) {
        if (lowerCaseConfirm || upperCaseConfirm || numberConfirm || symbolConfirm)
        window.alert('Welcome to PW Generator! you selected ' + (i));
    }
}






/////

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    selector()
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
