// outerFunction ke andar ek innerFunction define hai.
// outerVariable outer function ke scope mein hai,

// aur innerVariable inner function ke scope mein.
// Inner function outerVariable ko access kar sakta hai.
// kyunki JavaScript mein inner function ko outer function
// ke scope ka access hota hai (Lexical Scope).
// Outer function innerVariable ko access nahi kar sakta,
// kyunki wo variable sirf inner function ke andar accessible hota hai.

// function outerFunction() {
//   let outerVariable = "I am in the outer function!";

//   function innerFunction() {
//     let innerVariable = "I am in the inner function!";
//     console.log(outerVariable); // Accessing outer function's variable
//     console.log(innerVariable); // Accessing inner function's variable
//   }

//   innerFunction(); // Calling the inner function
//   console.log(outerVariable); // Accessing outer function's variable from outer scope
// }
// outerFunction(); // Calling the outer function

function outer() {
  let outhervari = "I am in the outher function";

  function innerfunc() {
    let innervariable = "I am in the inner function";
    console.log(outhervari); // Accessing outer function's variable
    console.log(innervariable); // Accessing inner function's variable
  }
  innerfunc();
  console.log(outhervari); // Accessing outer function's variable from outer scope
}

outer(); // Calling the outer function
