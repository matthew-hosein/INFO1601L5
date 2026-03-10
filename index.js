// Task 2
let radius = 7;
const pi = 3.14;
let area = radius * radius * pi;
console.log(area);

// Task 3
let name = "bob";
let age = 24;

console.log(typeof name); // string
console.log(typeof age);  // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);

// Task 4.1
console.log('1' == 1);          // true
console.log(1 == true);         // true
console.log("false" == false);  // false
console.log("false" == true);   // false

if ("false") {
  console.log("Hello false!");
}

// Task 4.2
console.log('1' === 1);       // false
console.log(1 === true);      // false
console.log("true" === true); // false

// If statement example
let grade = 67;

if (grade < 50) {
  console.log("Failed");
} else {
  console.log("Passed");
}

// While loop example
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

// For loop example
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Task 4.3 - FizzBuzz
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// Dates
let nowTimestamp = Date.now();
console.log(nowTimestamp);

let now = new Date(nowTimestamp);
let date = new Date(2019, 11, 17, 3, 24, 0);

console.log(date.toLocaleDateString("en-US"));
console.log(`${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()}`);

let difference = now - date;
let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

// Math
console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));
console.log(Math.floor(12.3453));
console.log(Math.ceil(12.3453));
console.log(Math.abs(-34));
console.log(Math.random());

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randInt(1, 10));

// Functions
function hello() {
  console.log("hello");
}
hello();

function addNums(a, b = 10) {
  return a + b;
}

console.log(addNums(5, 11));
console.log(addNums(2));

// Task 5 - Callbacks
function happyPrint(string) {
  console.log(": " + string);
}

function sadPrint(string) {
  console.log(": " + string);
}

function add(a, b, callback) {
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

// Timing
function printDate() {
  console.log(new Date().toLocaleTimeString());
}

// Uncomment if your lab asks you to demonstrate it
// setInterval(printDate, 1000);

// Arrays
let arr = [-5, 16, 33, 42, 103, 344];
console.log(arr.includes(-5));

arr.push(11);
console.log(arr);

let lastItem = arr.pop();
console.log(lastItem, arr);

arr.unshift(22);
console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = [...arr].reverse();
console.log(reversed);
console.log(arr.join("-"));

// Task 5.2
let arr2 = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num) {
  return num * 2;
}
let doubledArr = arr2.map(double);
console.log(doubledArr);

function isOdd(num) {
  return num % 2 !== 0;
}
let odds = arr2.filter(isOdd);
console.log(odds);

function has5Factor(num) {
  return num % 5 === 0;
}
let hasFiveFactor = arr2.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b) {
  return a - b;
}
let ascending = [...arr2].sort(intCompare);
console.log(ascending);

// Objects
let person = {
  name: "John",
  age: 12
};

console.log(person["age"]);
console.log(person.name);

person["weight"] = 70;
person.marks = [67, 34, 55, 89];

let firstMark = person.marks[0];
console.log(firstMark);

let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

let johnClone = {};
Object.assign(johnClone, person);
console.log(johnClone);