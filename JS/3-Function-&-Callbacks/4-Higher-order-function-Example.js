function copyArrayManuplate(array, intruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(intruction(array[i]));
  }
  return output;
}

function maltiplayBy2(input) {
  return input * 2;
}

const result = copyArrayManuplate([1, 2, 3, 4], maltiplayBy2);

console.log(result);
