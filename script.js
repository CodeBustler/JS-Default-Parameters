let cl = console.log;

// Task 1: Default Parameter for a Function
// Write a function called greet that takes a name parameter and prints a greeting message. If no name is provided, the default value should be 'Guest'. Test the function with different arguments.

/*
function greet(name = 'NA') {
  console.log(`Hello, ${name}`);
}

greet();
*/

//----------

// Task 2: Default Parameter with Mathematical Operation
// Write a function called calculateArea that calculates the area of a rectangle. The function should take two parameters, length and width, with default values of 0. If either length or width is not provided or is 0, the function should return 'Invalid value'. Otherwise, calculate and return the area.

/*
let area, length, width;

function calculateArea(length = 0, width = 0) {
  area = length * width;
  if (area == 0) {
    console.log('Invalid Value');
  } else {
    console.log(area);
  }
}

calculateArea();
*/

//-----------------

//Task 3: Default Parameter with Object Property
// Write a function called createUser that takes an object parameter representing a user. The object should have properties username and age, with default values of 'Anonymous' and 0, respectively. The function should return the user object. Test the function with different arguments.

/*
let user;

function createUser({ username = 'Anonymous', age = 0 }) {
  return { username, age };
}

cl(createUser({ username: 'codebustler', age: 42 }));
*/

// Task 4: Default Parameter with Array
// Write a function called getFirstElement that takes an array parameter. If the array is empty or not provided, the function should return null. Otherwise, return the first element of the array.

let arr;

function getFirstElement(arr = []) {
  if (arr.length == 0) {
    return null;
  }
  return arr[0];
}

console.log(getFirstElement(['Helo', 241]));
console.log(getFirstElement([241, 'faqs']));
console.log(getFirstElement([]));
console.log(getFirstElement());

// Variable
let language = 'JavaScript';
language = language || 'Unknown';

console.log(language); // Output: 'JavaScript' (if language has a truthy value)
