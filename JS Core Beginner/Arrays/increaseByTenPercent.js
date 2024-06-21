// variant 1
function increaseByTenPercent(arr) {
    return arr.map(num => num * 1.10);
  }

  const numbers = [100, 200, 300, 400, 500];
  const increasedNumbers = increaseByTenPercent(numbers);
  console.log(increasedNumbers); // [110, 220, 330, 440, 550]
  