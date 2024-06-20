// variant 3
'use strict';

function countVowels(str) {
  const vowels = 'AEIOUaeiou';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript")); 
