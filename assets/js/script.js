//! Password Generator Version 2 - Niksharpkings

//^ querySelectors to get elements from the DOM and store them in variables for use in the script file
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");
let messageData = document.querySelector("#messageData");

//^ Global variables
//Assign Variable to check if criteria is met, set to false at start
let criteriaPass = 0;
let useLowerCase;
let useUpperCase;
let useNumeric;
let useSpecial;
let passwordLength;

// Disable the copy button at start
copyBtn.disabled = true;

//^ Prompt and prep for the password generation in a function expression to generate a random password based on user prompt input of 8-128 characters password lenght and four confirm prompts selections which are if lowercase, uppercase, numeric, and special. Only a number between 8 and 128 can be selected and no less than one confirm questions can be selected or the password will not be generated and the copy to clipboard button will be disabled.

const passwordPromp = function () {
  // Reset the textarea and copy button
  passwordText.value = "";
  messageData.value = "";
  copyBtn.disabled = true;
  criteriaPass = 0;

  // Get the desired length of the password from the user and check if the user input is a numerical only with a value between 8 and 128. If not, the user will be re-prompted to enter a number between 8 and 128.

  passwordLength = parseInt(
    prompt("Enter the desired length of your password (8-128 characters):")
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordText.value =
      "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ USE NUMBER BETWEEN 8 and 💯2️⃣8️⃣❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🆗👁‍🗨〰👁‍🗨🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    copyBtn.disabled = true;
    criteriaPass = 0;
    alert(
      "❗❗❗Warning❗❗❗ ⚠ Please enter a number between 8 and 128 or ELSE❗❗❗ w(ﾟДﾟ)w"
    );
  } else if (isNaN(passwordLength)) {
    passwordText.value =
      "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ Use Numerical Characters Only❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    copyBtn.disabled = true;
    criteriaPass = 0;
    alert("❗❗❗Warning❗❗❗ ⚠ Please Enter A Numerical Characters Only.");
  } else {
    confirmCharCaseSet();
  }
};

const confirmCharCaseSet = function () {
  // Get the user's character preferences
  useLowerCase = confirm("Do you want to include lowercase characters?");
  useUpperCase = confirm("Do you want to include uppercase characters?");
  useNumeric = confirm("Do you want to include numeric characters?");
  useSpecial = confirm("Do you want to include special characters?");

  // Ensure that the user selected at least one character set
  if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecial) {
    copyBtn.disabled = true;
    criteriaPass = 0;
    passwordText.value =
      "💥🔥┗(╬◝∯◜)╯⚠ Warning❗ You think you soo smmmaarrrt! No you NOT!!! Go BACK and do it again❗❗❗ 💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🆗👁‍🗨〰👁‍🗨🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥💥🔥💥🔥💥🔥🔥💥🔥";
    alert(
      "❗❗❗Warning❗❗❗ ⚠ OHREALLY!!! You Must 🆗 to at least one out of four type of case set(s)! Now Go back and do it again and this time hit okay, okay!!"
    ); //alert user
  } else {
    criteriaPass = 1;
    generatePassword();
  }
};

const generatePassword = function () {
  //^ Local variables - Acceptable characters for password generation
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"; //create string of lowercase characters
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //create string of uppercase characters
  const numericCharacters = "0123456789"; //create string of numeric characters
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;':,./<>?"; //create string of special characters

  if (criteriaPass != 0) {
    let mergedPassword = "";
    if (useLowerCase === true) {
      mergedPassword += lowerCaseCharacters;
    }
    if (useUpperCase === true) {
      mergedPassword += upperCaseCharacters;
    }
    if (useNumeric === true) {
      mergedPassword += numericCharacters;
    }
    if (useSpecial === true) {
      mergedPassword += specialCharacters;
    }
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += mergedPassword.charAt(
        Math.floor(Math.random() * mergedPassword.length)
      );
    }
    // Check if the password meets the selected criteria
const hasLowerCase = /[a-z]/.test(password);
const hasUpperCase = /[A-Z]/.test(password);
const hasNumeric = /\D/.test(password);
const hasSpecial = /[!@#$%^&*()_+\-=[\]{}|;':",./<>?]/.test(password);

// Display the generated password and the selected criteria
passwordText.value = `Generated password: ${password}\n\n` +
  `Selected length: ${passwordLength}\n` +
  `Meets length requirements: ${password.length === passwordLength}\n` +
  `Includes lowercase characters: ${hasLowerCase}\n` +
  `Includes uppercase characters: ${hasUpperCase}\n` +
  `Includes numeric characters: ${hasNumeric}\n` +
  `Includes special characters: ${hasSpecial}\n`;
const passwordAlert = passwordText.value
    alert(passwordAlert);
    messageData.value = passwordText.value;
    passwordText.value = password;
    copyBtn.disabled = false;
  }
};

// Function Declaration named copyPassword will Copy the password to a users clipboard
function copyPassword() {
  document.getElementById("copy").onclick = function () {
    const copyText = document.getElementById("password");
    copyText.select(); //select text
    copyText.setSelectionRange(0, 99999); //For mobile devices
    copyTextToClipboard(copyText.value); //call copyTextToClipboard function
  };
  async function copyTextToClipboard(copyText) {
    try {
      await navigator.clipboard.writeText(copyText);
      alert("Password copied to clipboard."); //alert user
      console.log("Text copied to clipboard");
    } catch (err) {
      alert("'Error in copying text."); //alert user
      console.error("Error in copying text: ", err);
    }
  }
}

// Generate the password when the event listener  click event is triggered on the generate button and the function expression is activated.
generateBtn.addEventListener("click", passwordPromp);

// Copy the generated password to a clipboard event listener button that is connected to the copyPassword function declaration.
copyBtn.addEventListener("click", copyPassword);
