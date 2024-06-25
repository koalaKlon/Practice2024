// variant 1
class NotAnIntegerError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NotAnIntegerError';
    }
  }
  
  function checkInteger(number) {
    if (!Number.isInteger(number)) {
      throw new NotAnIntegerError('The number is not an integer.');
    }
    return true;
  }
  
  try {
    checkInteger(4.5);
  } catch (error) {
    if (error instanceof NotAnIntegerError) {
      console.error(error.message);
    } else {
      console.error('An unexpected error:', error);
    }
  }
  
  try {
    checkInteger(7);
    console.log('The number is an integer.');
  } catch (error) {
    if (error instanceof NotAnIntegerError) {
      console.error(error.message);
    } else {
      console.error('An unexpected error:', error);
    }
  }
  