// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Creating a prompt to determine password length
  passBool = false;
  while(passBool == false) {
    var passLength = prompt("Enter the length of the password." + "\nNote: The password length should be between 8 and 128 characters.");
    // Checking if user clicked the cancel button
    if(passLength == null) {
      return;
    }
    // Checking if user did not follow specified instructions
    else if(passLength < 8 || passLength > 128) {
      alert("The input value falls outside the specified range." + "\nPlease enter a length between 8 and 128.");
    }
    else {
      passBool = true;
    }
  }

  // Creating a prompt to determine lowercase characters
  lowerBool = false;
  while(lowerBool == false) {
    var lowerLength = prompt("Do you want to include lowercase characters." + "\nPlease enter either 'y' for yes, or 'n' for no.");
    // Checking if user clicked the cancel button
    if(lowerLength == null) {
      return;
    }
    // Checking if user did not follow specified instructions
    else if(lowerLength == 'y' || lowerLength == 'n') {
      lowerBool = true;
    }
    else {
      alert("The input value dosen't follow the instructions." + "\nPlease enter either 'y' or 'n'.");
    }
  }

  // Creating a prompt to determine uppercase characters
  upperBool = false;
  while(upperBool == false) {
    var upperLength = prompt("Do you want to include uppercase characters." + "\nPlease enter either 'y' for yes, or 'n' for no.");
    // Checking if user clicked the cancel button
    if(upperLength == null) {
      return;
    }
    // Checking if user did not follow specified instructions
    else if(upperLength == 'y' || upperLength == 'n') {
      upperBool = true;
    }
    else {
      alert("The input value dosen't follow the instructions." + "\nPlease enter either 'y' or 'n'.");
    }
  }

  // Creating a prompt to determine uppercase characters
  specBool = false;
  while(specBool == false) {
    var specChars = prompt("Do you want to include special characters." + "\nPlease enter either 'y' for yes, or 'n' for no.");
    // Checking if user clicked the cancel button
    if(specChars == null) {
      return;
    }
    // Checking if user did not follow specified instructions
    else if(specChars == 'y' || specChars == 'n') {
      specBool = true;
    }
    else {
      alert("The input value dosen't follow the instructions." + "\nPlease enter either 'y' or 'n'.");
    }
  }

  // Organizing required characters
  var listLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var listUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var listSpecChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

}
