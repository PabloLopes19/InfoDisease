import React from 'react';

import { Container, CardHeader, WeatherContent, Left, Right, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle, WeatherIcon, Desc, Temp } from './styles';

function Cards() {
  return (
    <Container>
        <CardHeader>China</CardHeader>
        <WeatherContent>
            <Left> <WeatherIcon /> </Left>
            <Right> 
                <Temp>0ºC</Temp>
                <Desc>Umidade: 83%</Desc>
                <Desc>Nuvens parciais</Desc>
            </Right>
        </WeatherContent>
        <CovidHeader>Covid-19</CovidHeader>
        <CovidContent>
            <CovidLeft>
                <CovidDataTitle>Casos</CovidDataTitle>
                <CovidDataTitle>Recuperados</CovidDataTitle>
                <CovidDataTitle>Mortes</CovidDataTitle>
            </CovidLeft>
            <CovidRight>
                <CovidData>696969</CovidData>
                <CovidData>696969</CovidData>
                <CovidData>696969</CovidData>
            </CovidRight>
        </CovidContent>
    </Container>
  );
}

export default Cards;