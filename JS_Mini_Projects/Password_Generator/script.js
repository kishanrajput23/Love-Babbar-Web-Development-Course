const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const inputSlider = document.querySelector("[data-lengthSlider]");
const upperCheck = document.querySelector("#uppercase");
const lowerCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]"); 
const symbols = '~!@#$%^&*()_+`[]\{}|;:<>,.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
// initialluy the password indicator will be of grey color
setIndicator("#ccc");

handleSlider();

// setting password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100 / (max-min)) + "% 100%";
}

// adding event listner on slider
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

// function to copy password
async function copyPassword() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied!";
    }
    catch(e) {
        copyMsg.innerText = "failed!";
    }

    // to make copy span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}


// adding event listner on copy btn
copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyPassword();
    }
})

// function to handle check box change or maintain checkbox count
function handleCheckboxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    // special condition
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider;
    }
}

// adding event listner on all checkbox
allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
})

// function to get random integer
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// function to get random number
function generateRandomNumber() {
     return getRandomInteger(0, 9);
}

// function to get random lowercase letter
function  generateLowercaseLetter() {
    return String.fromCharCode(getRandomInteger(97, 123)); 
}

// function to get random uppercase letter 
function  generateUppercaseLetter() {
    return String.fromCharCode(getRandomInteger(65, 91)); 
}

// function to get random symbols
function generateSymbols() {
     const randomNumber = getRandomInteger(0, symbols.length);
     return symbols.charAt(randomNumber);
}

// function to check strength of the password
function calculateStrength() {
    let hasNum = false;
    let hasUpper = false;
    let hasLower = false;
    let hasSymbol = false;

    if (upperCheck.checked) {
        hasUpper = true;
    }

    if (lowerCheck.checked) {
        hasLower = true;
    }

    if (numbersCheck.checked) {
        hasNum = true;
    }

    if (symbolsCheck.checked) {
        hasSymbol = true;
    }

    if (hasUpper && hasLower && (hasNum || hasSymbol) && passwordLength >= 8) {
        setIndicator("#ff0000");
    }
    else if ((hasLower || hasUpper) && (hasNum || hasSymbol) && passwordLength >= 6) {
        setIndicator("#FFA500");
    }
    else {
        setIndicator("#0000FF");
    }
}

// setting indicator
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = "5px 5px 5px black";
}

// adding event listner on generate password button
generateBtn.addEventListener('click', () => {
    // none of the checkbox are selected
    if (checkCount <= 0) {
        return ;
    }

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start password generation
    // step 1 : remove previous password
    password = "";

    // step 2 : check which checkbox is checked and include that first in password
    // no need to use below cases as it will become more complex so we use array
    // if (upperCheck.checked) {
    //     password += generateUppercaseLetter();
    // }

    // if (lowerCheck.checked) {
    //     password += generateLowercaseLetter();
    // }

    // if (numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if (symbolsCheck.checked) {
    //     password += generateSymbols();
    // }

    let functionArray = [];
    if (upperCheck.checked) {
        functionArray.push(generateUppercaseLetter);
    }

    if (lowerCheck.checked) {
        functionArray.push(generateLowercaseLetter);
    }

    if (numbersCheck.checked) {
        functionArray.push(generateRandomNumber);
    }

    if (symbolsCheck.checked) {
        functionArray.push(generateSymbols);
    }

    // cumpulsory additon of password
    for (let i=0; i<functionArray.length; i++) {
        password += functionArray[i]();
    }

    // remaining addition
    for (let i=0; i<passwordLength-functionArray.length; i++) {
        let randomIndex = getRandomInteger(0, functionArray.length);
        password += functionArray[randomIndex]();
    }

    // shuffle the password
    password = shufflePassword(Array.from(password));

    // show in UI
    passwordDisplay.value = password;

    // call calculate password strength function
    calculateStrength();
    
});  

// function to shuffle the password
function shufflePassword(array) {
    //  Fisher Yates Method
    for (let i=array.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    let str = "";
    array.forEach((el) => {
        str += el;
    })

    return str;
}
