// variant 2
"use strict";

function arrayContains(arr, value) {
  return arr.includes(value);
}

console.log(arrayContains([1, 2, 3, 4, 5], 3)); 
console.log(arrayContains([1, 2, 3, 4, 5], 6));
console.log(arrayContains(['apple', 'banana', 'cherry'], 'banana')); 
console.log(arrayContains(['apple', 'banana', 'cherry'], 'grape')); 
