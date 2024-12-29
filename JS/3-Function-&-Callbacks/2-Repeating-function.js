// Now suppose we ahve a function copyArrayMultiplayBy2

function copyArrayMultiplayBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myarray = [1, 2, 3];
const result = copyArrayMultiplayBy2(myarray);

console.log(result);
