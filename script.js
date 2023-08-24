// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//DEPENDENCIES DOM

//DATA
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerletters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "l",
  "k",
  "j",
  "h",
  "g",
  "f",
  "d",
  "s",
  "a",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var upperLower = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "-",
  "?",
  ">",
  "<",
  "/",
  ".",
  ",",
  ";",
  "'",
  "{",
  "}",
];
var characterOptions = [];
//FUNCTIONS
//How many Characters do you want for your password? (8-28)
function charLength() {
  var amtChar = prompt("How many characters do you want in your password?");
  var length = parseInt(amtChar);
  //If not between 8 and 28 ask for that
  if (amtChar < 8 || amtChar > 28) {
    alert("Password length must be between 8 and 28 characters.");
    writePassword();
  } else {
    return length;
  }
}

//Ask if you want to use lowercase letters
function lowerCase() {
  if (confirm("Would you like to use lowercase letters?")) {
    //if yes to lowercase add lowercase letters to character options
    characterOptions.push(...lowerletters);
    console.log(characterOptions);
    return true;
  } else {
    return false;
  }
}
//Ask if you would like to include uppercase letters?
function upperCase() {
  if (confirm("Would you like to use uppercase letters?")) {
    //if yes to uppercase add uppercase letters to character options
    characterOptions.push(...upperLower);
    console.log(characterOptions);
    return true;
  } else {
    return false;
  }
}
function incNumb() {
  if (confirm("Would you like to use numbers?")) {
    //if yes to numbers add numbers to character options
    characterOptions.push(...numbers);
    console.log(characterOptions);
    return true;
  } else {
    return false;
  }
}
//Ask if you would like to include special characters?
function specialChar() {
  if (confirm("Would you like to use special characters?")) {
    //if yes to special characters add special characters to character options
    characterOptions.push(...specialCharacters);
    console.log(characterOptions);
    return true;
  } else {
    return false;
  }
}
//Generate the password using the preferences given
function genPassword(amtChar, characterOptions) {
  let password = [];
  for (i = 0; i < amtChar; i++) {
    password.push(
      characterOptions[Math.floor(Math.random() * characterOptions.length)]
    );
  }
  return password;
}
function postPassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.textContent = "Your Password is: " + password;
}
function writePassword() {
  var amtChar = charLength();
  console.log(amtChar);
  var includeLwr = lowerCase();
  console.log(includeLwr);
  var includeUp = upperCase();
  console.log(includeUp);
  var includeNum = incNumb();
  console.log(includeNum);
  var includeSpcl = specialChar();
  console.log(includeSpcl);
  var password = genPassword(amtChar, characterOptions);
  console.log(password);
  postPassword();
}
//USER INTERACTIONS

//Display password in the given box

//INITIALIZATIONS
//button push starts write password questions
generateBtn.addEventListener("click", function () {
  writePassword();
});
