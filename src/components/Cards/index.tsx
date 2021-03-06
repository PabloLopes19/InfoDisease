import React, { useState, useEffect } from 'react';

import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from './styles';
// import LoadingPage from '../../pages/LoadingPage';

import api from '../../services/api';

function Cards() {
    const [cases, setCases] = useState('');
    const [recovered, setRecovered] = useState('');
    const [deaths, setDeaths] = useState('');

    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/report/v1/china')
        .then(response => {
            setCases(response.data.data.confirmed);
            setRecovered(response.data.data.recovered);
            setDeaths(response.data.data.deaths);

            // setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <Container>
            <CardHeader>China</CardHeader>
            <CovidHeader>Covid-19</CovidHeader>
            <CovidContent>
                <CovidLeft>
                    <CovidDataTitle>Casos</CovidDataTitle>
                    <CovidDataTitle>Recuperados</CovidDataTitle>
                    <CovidDataTitle>Mortes</CovidDataTitle>
                </CovidLeft>
                <CovidRight>
                    <CovidData>{ cases }</CovidData>
                    <CovidData>{ recovered }</CovidData>
                    <CovidData>{ deaths }</CovidData>
                </CovidRight>
            </CovidContent>
        </Container>
      );
}

export default Cards;