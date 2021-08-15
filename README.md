# password-generator

User Story 

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page



var length = parseInt(window.prompt(text, ""));
    checkNumber(length);
    password = randomFunc

    function checkNumber(length) {
    if (length <= 128 && length >= 8) {

    } else if (isNaN(length)) {
        generatePassword("Please enter a length from 8 to 128", "");
    } else {
        generatePassword("Your length (" + length + ") is not between 8 and 128", "");
    }

}



        var getLowercase = window.confirm("Would you like to include Lowercase?")
        if (getLowercase) {
            var getUpperCase = window.confirm("Would you like to include Uppercase?")
            if (getUpperCase) {
                var getNumber = window.confirm("Would you like to include Numbers?")
                if (getNumber) {
                    var getSymbol = window.confirm("Would you like to include Symbols?")
                    if (getSymbol) {
                        getLength()
                        }
                    }
                }
            }
        }


        var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}