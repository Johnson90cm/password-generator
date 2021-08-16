var length
// 1000
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// 0100
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// 0010
var number = "1234567890"
// 0001
var symbol = "!@#$%&*()_+-=[]|,./?><"
// 0011
var conCat1 = symbol.concat(number)
// 0101
var conCat2 = symbol.concat(upperCase)
// 0110
var conCat3 = number.concat(upperCase)
// 0111
var conCat4 = symbol.concat(number, upperCase)
// 1001
var conCat5 = symbol.concat(lowerCase)
// 1010
var conCat6 = number.concat(lowerCase)
// 1011
var conCat7 = symbol.concat(number, lowerCase)
// 1100
var conCat8 = upperCase.concat(lowerCase)
// 1101
var conCat9 = symbol.concat(upperCase, lowerCase)
// 1110
var conCat10 = number.concat(upperCase, lowerCase)
// 1111
var conCat11 = symbol.concat(number, upperCase, lowerCase)


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
    var lowerCaseConfirm = window.confirm("Would you like to include Lowercase?")
    var upperCaseConfirm = window.confirm("Would you like to include Uppercase?")
    var numberConfirm = window.confirm("Would you like to include Numbers?")
    var symbolConfirm = window.confirm("Would you like to include Symbols?")
    console.log(lowerCaseConfirm, upperCaseConfirm, numberConfirm, symbolConfirm)
    // 1111
    if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat11.length; i < length; i++) {
            retVal += conCat11.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0001
    if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && symbolConfirm) {
        for (i = 0, n = symbol.length; i < length; i++) {
            retVal += symbol.charAt(Math.floor(Math.random() * n));
        }
        return retVal

    }
     // 0010
    if (!lowerCaseConfirm && !upperCaseConfirm && numberConfirm && !symbolConfirm) {
        for (i = 0, n = number.length; i < length; i++) {
            retVal += number.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0011
    if (!lowerCaseConfirm && !upperCaseConfirm && numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat1.length; i < length; i++) {
            retVal += conCat1.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0100
    if (!lowerCaseConfirm && upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = upperCase.length; i < length; i++) {
            retVal += upperCase.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0101
    if (!lowerCaseConfirm && upperCaseConfirm && !numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat2.length; i < length; i++) {
            retVal += conCat2.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0110
    if (!lowerCaseConfirm && upperCaseConfirm && numberConfirm && !symbolConfirm) {
        for (i = 0, n = conCat3.length; i < length; i++) {
            retVal += conCat3.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0111
    if (!lowerCaseConfirm && upperCaseConfirm && numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat4.length; i < length; i++) {
            retVal += conCat4.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1000
    if (lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = lowerCase.length; i < length; i++) {
            retVal += lowerCase.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1001
    if (lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat5.length; i < length; i++) {
            retVal += conCat5.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1010
    if (lowerCaseConfirm && !upperCaseConfirm && numberConfirm && !symbolConfirm) {
        for (i = 0, n = conCat6.length; i < length; i++) {
            retVal += conCat6.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1011
    if (lowerCaseConfirm && !upperCaseConfirm && numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat7.length; i < length; i++) {
            retVal += conCat7.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1100
    if (lowerCaseConfirm && upperCaseConfirm && !numberConfirm && !symbolConfirm) {
        for (i = 0, n = conCat8.length; i < length; i++) {
            retVal += conCat8.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1101
    if (lowerCaseConfirm && upperCaseConfirm && !numberConfirm && symbolConfirm) {
        for (i = 0, n = conCat9.length; i < length; i++) {
            retVal += conCat9.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 1110
    if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && !symbolConfirm) {
        for (i = 0, n = conCat10.length; i < length; i++) {
            retVal += conCat10.charAt(Math.floor(Math.random() * n));
        }
        return retVal
    }
    // 0000
    else (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm)
        return "Please select at least one option"
}

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
