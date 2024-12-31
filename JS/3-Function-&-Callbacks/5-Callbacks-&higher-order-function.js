// Callback ek function hota hai jo kisi dusre function me as an argument diya jata
// hai, aur woh baad me execute hota hai jab zarurat ho.

// Higher Order Functions wo hote hain jo:
// Dusre functions ko as argument accept karte hain, ya
// Ek function ko as output return karte hain.

// Difference Between Callback and HOF:
// Callback: Ek function jo HOF ke andar pass hota hai.
// HOF: Wo function jo callbacks ko accept karta hai ya ek function return karta hai.

// Higher order function example :-
function copyArray(arr, instrction) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(instrction(arr[i]));
  }
  return output;
}
// callback function :-
function multiplatyBy2(input) {
  return input * 2;
}
const numArr = [1, 2, 3, 4];
let result = copyArray(numArr, multiplatyBy2);
console.log(result);


//callback function :-
function greet(name) {
  console.log(`hello, ${name}`);
}

function executecallback(Callback, value) {
  Callback(value);
}
executecallback(greet, "mujahid");
