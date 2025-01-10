// jab koi function kisi dusray function ko as a argument lata
// hay or us ko as a result return kerta hay Higher order function khlata hay

function applyOperarion(num, operarion) {
  return operarion(num);
}

function multiplay(m) {
  return m * m;
}

function addition(a) {
  return a + a;
}
 
console.log(applyOperarion(5, multiplay)); // 25
console.log(applyOperarion(5, addition)); // 10

