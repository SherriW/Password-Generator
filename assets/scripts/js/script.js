// Steps for password generator project
// 1. handle button click, you need to create a click event using the addEventListener for this generate button
// 2. display - window.prompt() to ask the user for size of the password
// 3. validate - only numbers and size of password, the range  >8 and <128
// 4. prompt- window.confirm()  to ask user for ok or cancel for the type of password
// 5. You need 4 confirms, each confirm represents the type of character in the password

// Get references to the #generate element in HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button ("listens" for 'click' event')
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Generate password using specific variables and length
var generatePassword = function () {
  
  // Set finalPassword display
  var finalPassword = "" //finalPassword.length

  // Define password selection options
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLONOPQRSTUVWXYZ"
  // Added more special characters to starter cfode
  var specialCharcters = "!@#$%^&*()-+=[]{}"
  var number = "0123456789"

  // Prompt user for input of number of characters
  var passwordsize = prompt("How many characters would you like your password to contain?")

  // Console.logs Provide information in console about item noted
  console.log(passwordsize)

  //
  if (Number.isNaN(passwordsize)) {
    alert("Password length must be a number.");
    return null;
    }
  if (passwordsize < 8) {
    alert ("Password length must be at least 8 characters.");
    return null;
    }
  if (passwordsize >128) {
    alert ("Password length must be less than 129.");
    return null;
  }

  //Prompt user input of character type(s) OK - Yes; Cancle No
  var isLowerCase = confirm("Does your password include Lowercase Letters?")
  var isUpperCase = confirm("Does your password include Uppercase Letters?")
  var isSpecialCharacter= confirm("Does your password include Special Characters?")
  var isNumber = confirm("Does your password include any Numbers?")

  console.log(isLowerCase)
  // End of user input

  // Alerts
  if (Number.isNaN(passwordsize)) {
    alert("Password length must be a number.");
    return null;
    }
  if (passwordsize < 8) {
    alert ("Password length must be at least 8 characters.");
    return null;
    }
  if (passwordsize >128) {
    alert ("Password length must be less than 129.");
    return null;
  }

   // Determine user input and create appropriate output based on that input.
  
   for (let i = finalPassword.length; i < passwordsize; i++) {
     
    if (isLowerCase && finalPassword.length<passwordsize) {
        var randomPickLowerCase = Math.floor(Math.random() * lowercase.length)
        var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase)
        finalPassword =finalPassword+ pickOneLowerCaseLetter 
      }
      if(isUpperCase && finalPassword.length<passwordsize) {
        var randomPickUpperCase = Math.floor(Math.random() * uppercase.length)
        var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase)
        finalPassword =finalPassword+ pickOneUpperCaseLetter
      }
      if(isSpecialCharacter && finalPassword.length<passwordsize) {
        var randomPickSpecial = Math.floor(Math.random() * specialCharcters.length)
        var pickOneSpecialCharacterLetter = specialCharcters.charAt(randomPickSpecial)
        finalPassword =finalPassword+ pickOneSpecialCharacterLetter
      }
      if(isNumber && finalPassword.length<passwordsize) {
      var randomPickNumber = Math.floor(Math.random() * number.length)
      var pickOneNumber = number.charAt(randomPickNumber)
      finalPassword =finalPassword+  pickOneNumber
      }
  
    }
  
      console.log(pickOneLowerCaseLetter, pickOneUpperCaseLetter, pickOneSpecialCharacterLetter, pickOneNumber)
   
  return finalPassword
}   