// Arrow function ek function expression he jisme
// function kyword ki jgha => (arrow) ka use kiya jata hai
// ye sintext ko esy bnata he or shat hi ye this ki hendling ko srl bnata he.

const greet = () => console.log("I am Arrow function");
greet();

const square = (x) => x * x;
console.log(square(4)); // 16


const multiple = (multi) => multi + multi;
console.log(multiple(5));



// function multiplayBy2(input) {
//   return input * 2;
// }

// const multiplayBy2 = (input) => {
//   return input * 2;
// };

// const multiplayBy2 = (input) => input * 2;

// const multiplayBy2 = (input) => input * 2;

// const output = multiplayBy2(3); //

// console.log(output);
