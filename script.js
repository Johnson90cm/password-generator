// create array for each type
// create funtion 
var length
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var symbol = "!@#$%&*()_+-=[]|,./?><"
var conCat1 = lowerCase.concat(upperCase)
var conCat2 = lowerCase.concat(upperCase, number)
var conCat3 = lowerCase.concat(upperCase, number, symbol)
var conCat4 = upperCase.concat(number, symbol)
var conCat5 = upperCase.concat(number)
var conCat6 = upperCase.concat(symbol)
var conCat7 = number.concat(lowerCase)
var conCat8 = number.concat(symbol)
var conCat9 = lowerCase.concat(upperCase)
var conCat10 = lowerCase.concat(upperCase)
var conCat11 = lowerCase.concat(upperCase)


function selector(text) {

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
    var retVal = ""
    var confirmArr = [lowerCaseConfirm, upperCaseConfirm, numberConfirm, symbolConfirm]
    var lowerCaseConfirm = window.confirm("Would you like to include Lowercase?")
    var upperCaseConfirm = window.confirm("Would you like to include Uppercase?")
    var numberConfirm = window.confirm("Would you like to include Numbers?")
    var symbolConfirm = window.confirm("Would you like to include Symbols?")
    console.log(lowerCaseConfirm, upperCaseConfirm, numberConfirm, symbolConfirm)

    if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && symbolConfirm) {
        for (i = 0, n = length; i < length; ++i) {
            retVal += symbol.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    if (lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = length; i < length; i++) {
            retVal += lowerCase.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    if (!lowerCaseConfirm && upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = length; i < length; i++) {
            retVal += upperCase.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    if (!lowerCaseConfirm && !upperCaseConfirm && numberConfirm && !symbolConfirm) {
        for (i = 0, n = length; i < length; i++) {
            retVal += number.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && symbolConfirm) {
        for (i = 0, n = length; i < length; i++) {
            retVal += symbol.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    if (lowerCaseConfirm && upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = conCat1.length; i < length; ++i) {
            retVal += conCat1.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    else (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm)
        return "Please select at least one option"
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
