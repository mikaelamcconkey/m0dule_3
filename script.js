// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  // Create an array of characters to use in the password
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?\\';

  let password = '';

  for (let i = 0; i < length; i++) {
// Generate a random index between 0 and the length of the character array
const index = Math.floor(Math.random() * characters.length);
// Add the character at the random index to the password
password += characters[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
return password;
}