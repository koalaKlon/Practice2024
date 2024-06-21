// variant 1
function compareObjects(obj1, obj2) {
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  }

  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2 };
  const obj3 = { a: 1, b: 4 };
  
  console.log(compareObjects(obj1, obj2)); // true
  console.log(compareObjects(obj1, obj3)); // false
  