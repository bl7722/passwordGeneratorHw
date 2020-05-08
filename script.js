// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar= "!@#$%^&*()";
generateBtn.addEventListener("click", writePassword); 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("Please enter the number of characters you want for you new password. Please choose a length of at least 8 characters and no more than 128 characters.");
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = ""}
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }


if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if (lowerCase === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;

}
if (upperCase === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}
if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;

}

var randomPasswordGenerated = "";
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 2);

  randomPasswordGenerated += randomNumberPicked;

}

randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumSpecialCharacters;


return randomPasswordGenerated;

}


