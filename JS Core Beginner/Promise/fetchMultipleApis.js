// variant 3
const http = require('http');

function fetchDataFromApi(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function fetchMultipleApis(urls) {
  try {
    const fetchPromises = urls.map(url => fetchDataFromApi(url));

    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(`Error fetching multiple APIs: ${error.message}`);
  }
}

const apiUrls = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2',
  'http://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleApis(apiUrls)
  .then(results => {
    console.log('Combined results:', results);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
