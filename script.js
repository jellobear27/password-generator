//prompt the user for the password criteria
//password length 8 < 128
//lowercase, uppercase, number, special charachters
//validate the input
// generate passward based on criteria
// display password to the passord input

var characterLength = 20;
var choiceArr = [];


//password choices arrays 
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharArr = [
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
  "<",
  ">",
  "?",
  "+",
  "=",
];
// generate button variable, references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//returns true or false
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
//generate password if promts are correct 
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
     passwordText.value = "";
  }
}

//generatePassword based on prompts
  // loop will keep running for as long as character length
  //password + choice 
function generatePassword() {
   

var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}


function getPrompts() {
  choiceArr = [];
//parseInt converts the string into number form
  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (8 - 128  characters"
    )
  ); //Nan = not a number

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digets. Please try again."
    );
    return false;
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}
