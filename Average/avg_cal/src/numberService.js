const axios = require("axios");

const WINDOW_SIZE = 10;
let numberWindow = [];

async function fetchAndStoreNumbers(type) {
    const url = `https://test-server.com/numbers/${type}`; // Replace with actual API

    try {
        const response = await axios.get(url, { timeout: 500 });
        const newNumbers = response.data.numbers.filter(n => !numberWindow.includes(n));

        const prevState = [...numberWindow];

        numberWindow.push(...newNumbers);
        if (numberWindow.length > WINDOW_SIZE) {
            numberWindow = numberWindow.slice(-WINDOW_SIZE);
        }

        const avg = numberWindow.length ? (numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length).toFixed(2) : 0;

        return {
            windowPrevState: prevState,
            windowCurrState: numberWindow,
            numbers: newNumbers,
            avg: parseFloat(avg),
        };

    } catch (error) {
        return { error: "Failed to fetch numbers in time" };
    }
}

module.exports = { fetchAndStoreNumbers };
