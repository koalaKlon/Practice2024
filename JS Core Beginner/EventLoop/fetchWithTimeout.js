// variant 2
async function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Запрос был отменен из-за таймаута');
        }
        throw error;
    }
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 5000;

fetchWithTimeout(apiURL, timeout)
    .then(data => {
        console.log('Данные из API:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
