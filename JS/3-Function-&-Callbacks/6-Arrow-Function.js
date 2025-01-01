// Arrow Functions in JavaScript
// Arrow Functions (=>) JavaScript me ek concise syntax provide karte hain functions
// likhne ke liye. Yeh modern ES6+ syntax ka part hain aur functional programming ko simplify karte hain.

// Example
let greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("I am arrow function"));

// Implicit return
// agar sirf ek line ka return statement hai:
const greets = (name) => `hello, ${name}`; //"{}" or return ko hata diya
console.log(greets("amarika"));

// No parameters
// agar koi pra meter nhi diya ho to
const hello = () => console.log("hello, world");
hello();

// Multiple Parameters

const add = (a, b) => a * b;
console.log(add(5, 3));

// Using with Array Methods
// map() array ke har element par callback function apply karega:

// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares); //[1,4,9,8,25]

// Object with a Method
// this ek special keyword hai jo current execution context ko refer karta hai.
// Iska value depend karta hai ki function kaise call ho raha hai.
// Ye dynamic hota hai aur situation ke hisaab se change hota hai.
let person = {
  fname: "mujahid",
  lname: "gurjar",
  greet: function () {
    return `hello, ${this.fname} ${this.lname}`;
  },
};

console.log(person.greet());
