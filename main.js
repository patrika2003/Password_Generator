
const passwordP1 = document.getElementById("password");
const copyP1 = document.getElementById("copy");
const lengthP1 = document.getElementById("length");
const upperP1 = document.getElementById("upper");
const lowerP1 = document.getElementById("lower");
const numberP1 = document.getElementById("number");
const symbolP1 = document.getElementById("symbol");
const generateP1 = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = lengthP1.value;

  let password = "";

  if(upperP1.checked) {
    password += getUppercase();
  }

  if(lowerP1.checked) {
    password += getLowercase();
  }

  if(numberP1.checked) {
    password += getNumber();
  }

  if(symbolP1.checked) {
    password += getSymbol();
  }

  for(let i = password.length; i < length; i++) {
    const x = generateX();
    password += x;
  }

  passwordP1.innerText = password;
}

function generateX() {
  const xs = [];
  if (upperP1.checked) {
    xs.push(getUppercase());
  }

  if (lowerP1.checked) {
    xs.push(getLowercase());

  }

  if(numberP1.checked) {
    xs.push(getNumber());
  }

  if (symbolP1.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return"";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateP1.addEventListener("click", generatePassword);

copyP1.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordP1.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");

});