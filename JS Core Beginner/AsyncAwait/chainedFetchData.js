// variant 2
async function fetchDataFromFirstServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка сети на первом сервере: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных с первого сервера:', error);
        throw error;
    }
}

async function fetchDataFromSecondServer(url, dataFromFirstServer) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFromFirstServer)
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети на втором сервере: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных со второго сервера:', error);
        throw error;
    }
}

async function performChainedFetch() {
    const firstServerURL = 'https://jsonplaceholder.typicode.com/posts/1';
    const secondServerURL = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const dataFromFirstServer = await fetchDataFromFirstServer(firstServerURL);
        console.log('Данные с первого сервера:', dataFromFirstServer);

        const dataFromSecondServer = await fetchDataFromSecondServer(secondServerURL, dataFromFirstServer);
        console.log('Данные со второго сервера:', dataFromSecondServer);

        return dataFromSecondServer;
    } catch (error) {
        console.error('Ошибка при выполнении последовательных запросов:', error);
    }
}

performChainedFetch();
