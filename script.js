// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_+="
var password = "";


var generatePassword = function() {
  for (i = 0; i < alpha.length; i++) {
    var generate = alpha[Math.floor(Math.random() * 62)];
    password += generate;
  }
  document.getElementById("password").innerHTML = password
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
