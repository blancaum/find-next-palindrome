'use strict';

//Constantes
const lastPalindrome = 9007199229917009;

//Elementos HTML
const numberInput = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const result = document.querySelector('.js_result');
const form = document.querySelector('.js_form');

//Funciones auxiliares
function isPalindrome(number) {
  const numberString = number.toString();
  const numberStringReversed = numberString.split('').reverse().join('');
  let isPalindrome = false;
  if (numberString === numberStringReversed) {
    isPalindrome = true;
  }
  return isPalindrome;
}
function nextPalindrome(number) {
  let nextNumber = number + 1;
  while (!isPalindrome(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

//Funciones Handler
function handleSubmit(ev) {
  ev.preventDefault();
}

function handleClick() {
  let number = null;
  let nextPalindromeString = null;

  if (numberInput.value >= 0 && numberInput.value < lastPalindrome) {
    number = parseInt(numberInput.value);
    nextPalindromeString = nextPalindrome(number).toString();
  } else {
    result.innerHTML = 'Please enter a valid number';
  }

  if (number >= 0 && number != null) {
    result.innerHTML = `The next palindrome is ${nextPalindromeString}.`;
  } else {
    result.innerHTML = 'Please enter a valid number.';
  }
}

form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleClick);
