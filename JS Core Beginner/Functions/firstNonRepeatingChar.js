// variant 3
function firstNonRepeatingChar(str) {
    const charCount = {};
    
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null; 
  }
  
  console.log(firstNonRepeatingChar("stress")); // "t"
  console.log(firstNonRepeatingChar("sTreSS")); // "T"
  console.log(firstNonRepeatingChar("aabbcc")); // null
  console.log(firstNonRepeatingChar(""));       // null
  console.log(firstNonRepeatingChar("abcdef")); // "a"
  