// Will diagrams the function with one piece of functionality changed to pursue
// the point that this function and the previous could be restructured to
// accommodate both functionality cases by changing it to accept both data and
// instructions in the form of a function of how to manipulate the data

// what if want to copy array and divide by 2

// ek esha function jo as a argument pass kr ske hai
// high order Function and callback
// callback wo hota he jis me hm argument ke shat cb function pass krte he


function add(a, b, cb) {
  const result = a + b;
  cb(result);
}

add(2,4, val => console.log((val)));