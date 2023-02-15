//Elementos HTML
numberInput = document.querySelector('.js_input');
button = document.querySelector('.js_button');
result = document.querySelector('.js_result');

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
  nextNumber = number + 1;
  while (!isPalindrome(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

//Funciones Handler

function handleClick() {
  let number = 0;
  if (numberInput.value < Number.MAX_SAFE_INTEGER) {
    number = parseInt(numberInput.value);
  }
  const nextPalindromeString = nextPalindrome(number).toString();
  if (number) {
    result.innerHTML = `The next palindrome is ${nextPalindromeString}.`;
  } else {
    result.innerHTML = 'Please enter a valid number.';
  }
}

button.addEventListener('click', handleClick);
