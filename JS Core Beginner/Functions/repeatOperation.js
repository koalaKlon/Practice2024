// variant 1
function repeatOperation(operation, interval) {
    const intervalId = setInterval(operation, interval);
  
    return () => clearInterval(intervalId);
  }
  
  const stop = repeatOperation(() => {
    console.log('Executing operation...');
  }, 1000);
  
  setTimeout(() => {
    stop();
    console.log('Operation stopped.');
  }, 5000);
  