// variant 1
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

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

fetchData(apiURL)
    .then(data => {
        console.log('Данные:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
