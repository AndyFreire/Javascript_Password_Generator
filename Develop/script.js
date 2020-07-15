// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharArray = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","/"];

var numArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Create a function for generating new passwords
function generatePassword(){

  //Create an empty string for our new password
  var newPassword = "";

  //Ask the user how many characters for their password
  var passwordLength = prompt("Enter a length for your password. Choose a number between 8 and 128");

  //Ask the user if they want to include special characters
  var includeSpecialChars = confirm("Do you want your password to include special characters?");

  //Ask the user if they want their password to include numbers
  var includeNumbers = confirm("Do you want your password to include numbers?");

  //Ask the user if they want their password to include lowercase
  var includeLowerCase = confirm("Do you want your password to include lowercase characters?");

  //Ask the user if they want their password to include uppercase
  var includeUpperCase = confirm("Do you want your password to include uppercase characters?");

  //Create a new array with possible characters for our password
  var newArray = [];

  //Add all valid characters to the new array based on user's input
  if (includeSpecialChars){ newArray = newArray.concat(specialCharArray); }

  if (includeNumbers){ newArray = newArray.concat(numArray); }

  if (includeLowerCase) { newArray = newArray.concat(lowercaseArray); }

  if (includeUpperCase) { newArray = newArray.concat(uppercaseArray); }

  //Generate a password the length requested by user
  for (var i = 0; i < passwordLength; i++){
    newPassword = newPassword + newArray[Math.round(Math.random() * newArray.length)];
  }

  return newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
