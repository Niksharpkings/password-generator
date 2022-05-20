//querySelector to get elements from the DOM and store them in variables for use in the script file
var generateBtn = document.querySelector("#generate"); //select generate button and add event listener to it to call writePassword function when clicked
var passwordText = document.querySelector("#password"); // Write password to the #password input box when the generate button is clicked 
var copyBtn = document.querySelector("#copy"); //select copy button and add event listener to it to call copyPassword function when clicked

//Hitting the button will call the writePassword function and display the password in the #password input box 
generateBtn.addEventListener("click", writePassword); //querySelector to get elements from the DOM and store them in variables for use in the script file
copyBtn.setAttribute("disabled", "disabled"); //add disabled attribute to copy button


//Setting up the criteria selection chooses for password generation. At least one criteria must be selected. Otherwise, an alert will be displayed. If more then one is selected merge them together, if one or more is not selected merge the rest together.
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"; //create string of lowercase characters
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //create string of uppercase characters
const numericCharacters = "0123456789"; //create string of numeric characters
const specialCharacters = "!@#$%^&*()_+-=[]{}|;':,./<>?"; //create string of special characters
  
function generatePassword() { //function to generate password
  var passwordLength = prompt("How long would you like your password to be? (8-128 characters)"); //prompt user for password length
  if (isNaN(passwordLength)) { //if passwordLength is not a number
    alert("❗❗❗Warning❗❗❗ ⚠ Please Enter A Numerical Characters Only."); //alert user
    // #password input box will be blank and copy button will be disabled 
    //write  "Please enter a numeric." to #password input box
    password = passwordText.value = "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ Use Numerical Characters Only❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    return password & copyBtn.setAttribute("disabled"); //return to the function
  } //end if
  if (passwordLength < 8 || passwordLength > 128) { //if passwordLength is less than 8 or greater than 128
    alert("❗❗❗Warning❗❗❗ ⚠ Please enter a number between 8 and 128 or ELSE❗❗❗ w(ﾟДﾟ)w"); //alert user
    // #password input box will say "please enter a number between 8 and 128" and copy button will be disabled
    password = passwordText.value = "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ USE NUMBER BETWEEN 8 and 💯2️⃣8️⃣❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🆗👁‍🗨〰👁‍🗨🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    return password & copyBtn.setAttribute("disabled"); //return to the function
  } //end if
  var lowerCase = confirm("Would you like lowercase characters?"); //confirm user wants lowercase characters
  var upperCase = confirm("Would you like uppercase characters?"); //confirm user wants uppercase characters
  var numeric = confirm("Would you like numeric characters?"); //confirm user wants numeric characters
  var special = confirm("Would you like special characters?"); //confirm user wants special characters
  if (lowerCase === false && upperCase === false && numeric === false && special === false) { //if none of the criteria are selected
    alert("❗❗❗Warning❗❗❗ ⚠ OHREALLY!!! You Must 🆗 to atleast one character type! Now Go back and do it again and this time hit okay, okay!!  "); //alert user
    // #password input box will say "please select at least one criteria" and copy button will be disabled
    password = passwordText.value = "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ You think you soo smmmaarrrt! No you NOT!!! Go BACK and do it again❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🆗👁‍🗨〰👁‍🗨🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    return password & copyBtn.setAttribute("disabled"); //return to the function
  } //end if
  var password = ""; //create empty string to store password
  var criteria = ""; //create empty string to store criteria
  if (lowerCase === true) { //if user wants lowercase characters
    criteria += lowerCaseCharacters; //add lowercase characters to criteria
  } //end if
  if (upperCase === true) { //if user wants uppercase characters
    criteria += upperCaseCharacters; //add uppercase characters to criteria
  } //end if
  if (numeric === true) { //if user wants numeric characters
    criteria += numericCharacters; //add numeric characters to criteria
  } //end if
  if (special === true) { //if user wants special characters
    criteria += specialCharacters; //add special characters to criteria
  } //end if
  for (var i = 0; i < passwordLength; i++) { //for loop to generate password
    password += criteria.charAt(Math.floor(Math.random() * criteria.length)); //add random character from criteria to password
  } //end for
  return password; //return password
} //end generatePassword
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);

    
function copyPassword() { //function to copy password to clipboard
  var copyText = document.querySelector("#password"); //select #password input box
  copyText.select(); //select the text in the #password input box
  document.execCommand("copy"); //copy the text in the #password input box
  alert("Password copied to clipboard."); //alert user
} //end copyPassword

// Write password to the #password input box when the generate button is clicked
function writePassword() { //function to write password to #password input box
  var password = generatePassword();//call generatePassword function and store result in variable 'password' 
  passwordText.value = password; //write password to #password input box
  if (passwordText.value = password) { //if password is written to #password input box
    copyBtn.removeAttribute("disabled"); //remove disabled attribute from copy button
  }
} //end writePassword