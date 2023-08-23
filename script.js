// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button

//generateBtn.addEventListener("click", writePassword());

//DEPENDENCIES DOM

//DATA

//FUNCTIONS
//How many Characters do you want for your password? (8-28)
function charLength() {
  var amtChar = prompt("How many characters do you want in your password?");
  //If not between 8 and 28 ask for that
  if (amtChar < 8 || amtChar > 28) {
    alert("Password length must be between 8 and 28 characters.");
    writePassword();
  } else {
    return amtChar;
  }
}

//Ask if you would like to include uppercase letters?
function upperCase() {
  if (confirm("Would you like to use uppercase letters?")) {
    return true;
  } else {
    return false;
  }
}

//Ask if you would like to include special characters?
function specialChar() {
  if (confirm("Would you like to use special characters?")) {
    return true;
  } else {
    return false;
  }
}

function writePassword() {
  var amtChar = charLength();
  console.log(amtChar);
  var includeUp = upperCase();
  console.log(includeUp);
  var includeSpcl = specialChar();
  console.log(includeSpcl);
}
//USER INTERACTIONS

//button push starts write password questions

//Generate the password using the preferences given
//Display password in the given box

//INITIALIZATIONS
writePassword();
