// variant 3
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}

async function fetchParallelData(urls) {
    try {
        const fetchPromises = urls.map(url => fetchData(url));
        const results = await Promise.all(fetchPromises);
        
        return results;
    } catch (error) {
        console.error('Ошибка при параллельной загрузке данных:', error);
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchParallelData(urls)
    .then(data => {
        console.log('Данные с нескольких серверов:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
