// variant 3
class DivisionByZeroError extends Error {
    constructor(message) {
      super(message);
      this.name = 'DivisionByZeroError';
    }
  }
  
  function checkNumbers(a, b) {
    if (b === 0) {
      throw new DivisionByZeroError('The second number cannot be zero.');
    }
    return true;
  }
  
  try {
    checkNumbers(10, 0);
  } catch (error) {
    if (error instanceof DivisionByZeroError) {
      console.error(error.message);
    } else {
      console.error('An unexpected error:', error);
    }
  }
  
  try {
    checkNumbers(10, 5);
    console.log('Both numbers are valid.');
  } catch (error) {
    if (error instanceof DivisionByZeroError) {
      console.error(error.message);
    } else {
      console.error('An unexpected error:', error);
    }
  }
  