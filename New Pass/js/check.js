let start = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowerUpperCase = document.querySelector(".low-upper-case");
let number = document.querySelector(".number-case");
let symbol = document.querySelector(".special-case");
let eighth = document.querySelector(".eight-character-case");

password.addEventListener("keyup", function () {
  let pass = password.value;
  checkStrength(pass);
});

function checkStrength(password) {
  if (password.value != "") {
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      lowerUpperCase.classList.remove("red");
      lowerUpperCase.classList.add("green");
    } else {
      lowerUpperCase.classList.add("red");
      lowerUpperCase.classList.remove("green");
    }

    //check for number
    if (password.match(/([0-9])/)) {
      number.classList.remove("red");
      number.classList.add("green");
    } else {
      number.classList.add("red");
      number.classList.remove("green");
    }

    //check for special symbols
    if (password.match(/([!,@,#,$,%,^,&,*,(,),_,+,=,~])/)) {
      symbol.classList.remove("red");
      symbol.classList.add("green");
    } else {
      symbol.classList.add("red");
      symbol.classList.remove("green");
    }

    //check for password length
    len = password.length;
    if (len > 7 && len < 16) {
      eighth.classList.remove("red");
      eighth.classList.add("green");
    } else {
      eighth.classList.add("red");
      eighth.classList.remove("green");
    }
  }
}
