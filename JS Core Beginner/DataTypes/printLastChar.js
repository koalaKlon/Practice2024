// variant 2
function printLastChar(str) {
    if (str.length === 0) {
      console.log("The string is empty.");
    } else {
      console.log(str.charAt(str.length - 1));
    }
  }

  printLastChar("Hello, World!"); // "!"
  printLastChar("JavaScript");    // "t"
  printLastChar("");              // "The string is empty."
  