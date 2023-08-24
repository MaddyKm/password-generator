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

// function genPassword(amtChar, length, includeUp, includeNum, includeSpcl) {
//   if (includeUp === true && includeNum === true && includeSpcl === true) {
//     for (let i = 0; i < amtChar; i++) {
//       var password = (upperLower + numbers + specialCharacters)[
//         Math.floor(Math.random() * specialCharacters.length)
//       ];
//     }
//     return password;
//   } else if (
//     includeUp === true &&
//     includeNum === true &&
//     includeSpcl === false
//   ) {
//     var password = (upperLower + numbers)[Math.floor(Math.random() * length)];
//     return password;
//   } else if (
//     includeUp === true &&
//     includeNum === false &&
//     includeSpcl === false
//   ) {
//     password = upperLower[Math.floor(Math.random() * length)];
//     return password;
//   } else if (
//     includeUp === false &&
//     includeNum === false &&
//     includeSpcl === false
//   ) {
//     for (let i = 0; i < amtChar; i++) {
//       password = lowerletters[i][Math.floor(Math.random() * length)];
//     }
//     return password;
//   } else if (
//     includeUp === false &&
//     includeNum === true &&
//     includeSpcl === true
//   ) {
//     password = (lowerletters + numbers + specialCharacters)[
//       Math.floor(Math.random() * length)
//     ];
//     return password;
//   } else if (
//     includeUp === false &&
//     includeNum === true &&
//     includeSpcl === false
//   ) {
//     password = (lowerletters + numbers)[Math.floor(Math.random() * length)];
//     return password;
//   } else if (
//     includeUp === false &&
//     includeNum === false &&
//     includeSpcl === true
//   ) {
//     password = (lowerletters + specialCharacters)[
//       Math.floor(Math.random() * length)
//     ];
//     return password;
//   } else {
//     password = (upperLower + specialCharacters)[
//       Math.floor(Math.random() * length)
//     ];
//     return password;
//   }
//}
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
  var password = genPassword(
    amtChar,
    includeUp,
    includeNum,
    includeSpcl,
    length
  );
  console.log(password);
}
//USER INTERACTIONS

//button push starts write password questions

//Display password in the given box

//INITIALIZATIONS
writePassword();
