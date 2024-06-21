// variant 3
function sumFirstLastDigit(num) {
    const numStr = num.toString();
    const firstDigit = parseInt(numStr.charAt(0), 10);
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1), 10);
    const sum = firstDigit + lastDigit;

    console.log(sum);
  }
  
  sumFirstLastDigit(12345);  // 6
  sumFirstLastDigit(98765);  // 14
  sumFirstLastDigit(4003);   // 7
  sumFirstLastDigit(5);      // 10
  