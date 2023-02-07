console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log('Text should say "Hello, Sam!":', helloName("Sam"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log(addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplyThree(2, 2, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

console.log('isPositive is equal to:', isPositive(2));
console.log('isPositive is equal to:', isPositive(-2));
console.log('isPositive is equal to:', isPositive(0));



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let arr1 = ["cat", "dog", "mouse"];
//let now = [];

function getLast([array]) {
  if ([array]) {
    let the_last_item = [array.pop()];
    return the_last_item;
  } else {
    return 'undefined';
  }

}
console.log(getLast([arr1]));
//console.log(getLast([now]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let goo = [1, 2, 3, 4];

function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === value) {
      console.log(true);
      break;
    } else {
      console.log(false);
    }
  }
}

console.log(find(7, goo));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let string = ['apple', 'donut', 'gummy bears'];

function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    console.log(true, letter, string);
  } else {
    console.log(false, letter, string);
  }
}


console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
let arr4 = [1, 3, 5];

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i]
  }
  console.log(sum);
  return sum;
}
console.log('This is the sum:', sumAll(arr4));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let inputArray = [-2, 4, 7, -4, 6];

function allPos(array){
  let posArr = array.filter(num => num > -1);
  return posArr;
}
console.log(allPos(inputArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
