const axios = require('axios').default;

const covidApi = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh',
});

export const weatherApi = axios.create({
    baseURL: 'dnaskdlasjdaskdas',
})

export default covidApi;