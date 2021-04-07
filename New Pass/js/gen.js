const pass_Text = document.getElementById("pass-text");
const pass_Copy = document.getElementById("pass-copy");

const pass_Length = document.getElementById("pass-length");
const pass_Upper = document.getElementById("pass-upper");
const pass_Lower = document.getElementById("pass-lower");
const pass_Number = document.getElementById("pass-number");
const pass_Symbol = document.getElementById("pass-symbol");

const generate_Pass = document.getElementById("generate-pass");

const upper_Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_Letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]";

function getUppercase() {
  return upper_Letters[Math.floor(Math.random() * upper_Letters.length)];
}

function getLowercase() {
  return lower_Letters[Math.floor(Math.random() * lower_Letters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = pass_Length.value;
  let password = "";

  for (let i = 0; i < length; i++) {
    const x = generateX();
    password += x;
  }

  pass_Text.innerHTML = password;
}

function generateX() {
  const xs = [];
  pass_Upper.checked && xs.push(getUppercase());
  pass_Lower.checked && xs.push(getLowercase());
  pass_Number.checked && xs.push(getNumber());
  pass_Symbol.checked && xs.push(getSymbol());

  if (xs.length == 0) {
    return "";
  }

  return xs[Math.floor(Math.random() * xs.length)];
}

generate_Pass.addEventListener("click", generatePassword);

pass_Copy.addEventListener("click", () => {
  const text_Area = document.createElement("textarea");
  const password = pass_Text.innerText;

  if (!password) {
    return;
  }

  text_Area.value = password;
  document.body.appendChild(text_Area);
  text_Area.select();
  document.execCommand("copy");
  text_Area.remove();
  alert("Password copied to clipboard");
});
