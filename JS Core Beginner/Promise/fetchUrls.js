// variant 2
const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch ${url}: ${response.statusCode} ${response.statusMessage}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function fetchUrls(urls) {
  const fetchPromises = urls.map(url => fetchUrl(url));
  return Promise.all(fetchPromises);
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

fetchUrls(urls)
  .then(results => {
    console.log('All URLs fetched successfully:', results);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
