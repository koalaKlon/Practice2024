// variant 1
function performSequentialOperations(operations) {
    return operations.reduce((promiseChain, currentOperation) => {
      return promiseChain.then(currentOperation);
    }, Promise.resolve());
  }

  const asyncOperation1 = () => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 1 completed');
      resolve('Result 1');
    }, 1000);
  });
  
  const asyncOperation2 = () => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 2 completed');
      resolve('Result 2');
    }, 1000);
  });
  
  const asyncOperation3 = () => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation 3 completed');
      resolve('Result 3');
    }, 1000);
  });
  
  performSequentialOperations([asyncOperation1, asyncOperation2, asyncOperation3])
    .then(() => {
      console.log('All operations completed');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  