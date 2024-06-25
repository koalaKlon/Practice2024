// variant 2
function accessProperty(obj, property) {
    try {
      return obj[property];
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(`TypeError: Cannot read property '${property}' of undefined or null object.`);
      } else {
        throw error;
      }
    }
    return undefined;
  }
  
  let myObject;
  
  try {
    console.log(accessProperty(myObject, 'name'));
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
  
  myObject = { name: 'Pasha' };
  try {
    console.log(accessProperty(myObject, 'name')); // 'Pasha' ожидается
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
  