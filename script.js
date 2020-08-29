// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function start() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


//return a string
function generatePassword() {

    // ======= vars definition ======

    // Array of special characters to be included in password
    var specialCharacters = [
        "@",
        "%",
        "+",
        "\\",
        "/",
        "'",
        "!",
        "#",
        "$",
        "^",
        "?",
        ":",
        ",",
        ")",
        "(",
        "}",
        "{",
        "]",
        "[",
        "~",
        "-",
        "_",
        ".",
    ];
    // Array of numeric characters to be included in password
    var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // Array of lowercase characters to be included in password
    var lowerCasedCharacters = [
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
    // Array of uppercase characters to be included in password
    var upperCasedCharacters = [
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
    var userOptionalChars = [];

    var userOptions = {
        expectSpecialChars: false,
        expectNumericChars: false,
        expectUppercaseChars: false,
        expectLowercaseChars: false,
    }


    // ======= functions definition ======
    function getUserOptions() {

        // get user options and store in vars
        var passwordLength = parseInt(prompt("enter password length"));

        // check for length (it should be longer than 8 and shorter than 128)
        if (passwordLength > 8 && passwordLength < 128) {


            // check if lower
            var expectLowercaseChars = confirm("do you want lower case?");


            // check if upper
            var expectUppercaseChars = confirm("do you want upper case?");


            // check if special
            var expectSpecialChars = confirm("do you want special case?");


            // check if numeric
            var expectNumericChars = confirm("do you want numeric case?");
        }

        // else - alert user
        else {
            alert("password length should be longer than 8 and shorter than 128");

        };

        if (expectLowercaseChars === false && expectUppercaseChars === false && expectSpecialChars === false && expectNumericChars === false) {
            alert("must choose at least one category")
        }
    }
    function generatePassword(userOptions) {
        var password = [];
        
        // if lower
        // push a random lower char to password
        // add lowerCharsArray to userOptionalChars
        if (userOptions.expectLowercaseChars) {
            password.push(lowerCasedCharacters[(Math.floor((Math.random() * 26) + 1))]);
            userOptionalChars = userOptionalChars.concat(lowerCasedCharacters);
        }

        // if upper
        // push a random upper char to password
        // add upperCharsArray to userOptionalChars
        if (userOptions.expectUppercaseChars) {
            password.push(upperCasedCharacters[(Math.floor((Math.random() * 26) + 1))]);
            userOptionalChars = userOptionalChars.concat(upperCasedCharacters);
        }

        // if special
        // push a random special char to password
        // add specialCharsArray to userOptionalChars
        if (userOptions.expectSpecialChars) {
            password.push(specialCharacters[(Math.floor((Math.random() * specialCharacters.length) + 1))]);
            userOptionalChars = userOptionalChars.concat(specialCharacters);
        }

        // if numeric
        // push a random numeric char to password
        // add numericCharsArray to userOptionalChars
        if (userOptions.expectNumericChars) {
            password.push(numericCharacters[(Math.floor((Math.random() * numericCharacters.length) + 1))]);
            userOptionalChars = userOptionalChars.concat(numericCharacters);
        }


        // mutate the array to a string
        // return password string
        password = password.toString();

        // for loop between start number of elemnts in password to the requested number of charactars
        for (i = password.length; i < passwordLength; i++) {
            password.push(userOptionalChars[Math.floor((math.random() * userOptionalChars.length) + 1)]);
        }
        
        return password;
    }

    // ======= functions calls (start) ======
    getUserOptions();

    generatePassword(userOptions);
}
// Add event listener to generate button
generateBtn.addEventListener("click", start);


