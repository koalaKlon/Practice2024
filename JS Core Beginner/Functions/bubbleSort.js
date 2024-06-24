// variant 2
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);
    
    return arr;
  }
  
  console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
  console.log(bubbleSort([5, 1, 4, 2, 8]));             // [1, 2, 4, 5, 8]
  