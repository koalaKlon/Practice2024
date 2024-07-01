const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = '25389b588b820703be211d7fff912588'; 
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const testCases = [
    { city: 'Minsk', apiKey: API_KEY },
    { city: 'InvalidCity', apiKey: API_KEY }, 
    { city: 'Minsk', apiKey: 'INVALID_API_KEY' },
    { city: '', apiKey: API_KEY } 
];

const getStatuses = async () => {
    const statuses = [];

    for (const testCase of testCases) {
        const { city, apiKey } = testCase;
        try {
            const response = await axios.get(`${BASE_URL}?q=${city}&appid=${apiKey}`);
            statuses.push({ city: city || 'empty', apiKey: apiKey || 'empty', status: response.status });
        } catch (error) {
            if (error.response) {
                statuses.push({ city: city || 'empty', apiKey: apiKey || 'empty', status: error.response.status });
            } else {
                statuses.push({ city: city || 'empty', apiKey: apiKey || 'empty', status: 'Network error' });
            }
        }
    }

    try {
        const response = await axios.get('http://httpbin.org/status/301', { maxRedirects: 0 });
        statuses.push({ city: 'Redirect', apiKey: 'N/A', status: response.status });
    } catch (error) {
        if (error.response) {
            statuses.push({ city: 'Redirect', apiKey: 'N/A', status: error.response.status });
        } else {
            statuses.push({ city: 'Redirect', apiKey: 'N/A', status: 'Network error' });
        }
    }

    try {
        const response = await axios.get('http://httpbin.org/status/500');
        statuses.push({ city: 'ServerError', apiKey: 'N/A', status: response.status });
    } catch (error) {
        if (error.response) {
            statuses.push({ city: 'ServerError', apiKey: 'N/A', status: error.response.status });
        } else {
            statuses.push({ city: 'ServerError', apiKey: 'N/A', status: 'Network error' });
        }
    }

    return statuses;
};

app.get('/statuses', async (req, res) => {
    try {
        const statuses = await getStatuses();
        statuses.sort((a, b) => a.status - b.status);
        res.status(200).json(statuses);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
