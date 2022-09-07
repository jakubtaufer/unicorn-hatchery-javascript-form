"use strict";

const form = document.querySelector("#form");
const output = document.querySelector("#output");

const inputName = document.querySelector("#username");
const inputEmail = document.querySelector("#email");
const inputPsw = document.querySelector("#psw");
const inputPswRepeat = document.querySelector('#psw-repeat')
const inputDate = document.querySelector('#date')

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const pswError = document.getElementById("psw-error");
const pswRepeatError = document.getElementById('psw-repeat-error')
const dateError = document.getElementById('date-error')

const user = { username: '', password: '', email: '', date: ''}

function validateName() {
  const name = document.getElementById("username").value;

  if (name.length >= 4 && name.length <= 64) {
        user.username = name;
        nameError.innerHTML = "";
  } else nameError.innerHTML = "Enter value between 4 and 64 characters";
}

function validatePsw() {
    const psw = document.getElementById('psw').value;
    const pswRepeat = document.getElementById('psw-repeat').value

    if(psw !== pswRepeat ) {
        pswRepeatError.innerHTML = 'Values are not equal!'
    } else if (psw.length < 8 || psw.length > 64) {
        pswError.innerHTML = 'Enter value between 8 and 64 characters';
    } else user.password = psw;
}

function validateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        user.email = document.getElementById('email').value; 
      return true;
    } else {
      emailError.innerHTML = 'Enter valid value!'  
      return false;
    }
  }

function validateDate() {   
    const date = document.getElementById('date').value;
    console.log(date)
    user.date = date
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateName(inputName);
  validateEmail(inputEmail);
  validatePsw(inputPsw)
  validateDate(inputDate)

  if (user.username !== '' && user.email !== '' && user.password !== '') {
      output.textContent = `${user.username} - ${user.email} - ${user.date}`
  } 
}

);

