// variant 2
function sumFirstHalf(arr) {
    const midpoint = Math.ceil(arr.length / 2);
    let sum = 0;
    for (let i = 0; i < midpoint; i++) {
      sum += arr[i];
    }
    return sum;
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  const result = sumFirstHalf(numbers);
  console.log(result); // 6
  