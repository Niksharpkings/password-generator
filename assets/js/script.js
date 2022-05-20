// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

const generatePassword = () => {  //const is used to declare a variable that will not change
  //prompt for password criteria
  const length = prompt("How many characters would you like your password to be? (8-128)");  //prompt for length of password
  const lowercase = confirm("Would you like to include lowercase letters?"); //prompt for lowercase letters
  const uppercase = confirm("Would you like to include uppercase letters?"); //prompt for uppercase letters
  const numeric = confirm("Would you like to include numbers?"); //prompt for numbers
  const special = confirm("Would you like to include special characters?"); //prompt for special characters
  //validate password criteria
  if (length < 8 || length > 128) {  //if length is less than 8 or greater than 128
    alert("Password must be between 8 and 128 characters"); //alert user
    return; //exit function
  } else if (lowercase === false && uppercase === false && numeric === false && special === false) { //if no criteria is selected
    alert("You must select at least one criteria"); //alert user
    return; //exit function
  }  //if criteria is selected
  //generate password
  let password = ""; //create empty string
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,./<>?"; //create string of possible characters
  //add criteria to password
  for (let i = 0; i < length; i++) { //for loop to add criteria to password
    password += possible.charAt(Math.floor(Math.random() * possible.length)); //add random character from possible to password
  }  //end for loop
  //return password
  return password; //return password
}  //end generatePassword

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //get reference to generate button


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //add event listener to generate button


// Write password to the #password input
function writePassword() { //function to write password to page
  var password = generatePassword(); //call generatePassword function
  var passwordText = document.querySelector("#password"); //get reference to password text

  passwordText.value = password; //write password to text box

} //end writePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //add event listener to generate button
