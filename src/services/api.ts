import axios from 'axios';

const covidApi = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh',
});

export default covidApi;