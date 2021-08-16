# Password Generator Challenge Wk 3

Description: 

In this assignment I was tasked with creating the script.js for a password generation web application.

I used a few of the following methods to get it functioning.

1. Created variables to hold data required to write the password.
2. Concatenated multiple variables to create mixed arrays based on the users desired inputs.
3. Created multiple functions: 1 to prompt the user and define length of the password desired, another to run multiple "if" statements depending on the users selections and return desired password criteria


Screenshot: 
![](./image.png)

Working Url: https://johnson90cm.github.io/password-generator/


# User Story and Acceptance Criteria

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
