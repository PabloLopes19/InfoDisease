import React, { useEffect, useState } from 'react';

import { Content, DataContainer } from './styles';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from '../../components/Cards/styles';

import './styles.css';
import LoadingGif from '../../assets/Pulse-1s-200px(1).gif';

const Brazil: React.FC = () => {
    const [States, SetStates] = useState<any>([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/report/v1')
        .then(response => {
            SetStates(response.data.data);

            setLoading(false);

            // setTimeout(() => {
            //     setLoading(false);
            // }, 2000);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    var date = new Date();
    var Day = date.getDay();
    var Month = date.getMonth();
    var Year = date.getFullYear();

    var formatedDate = `${Day}/${Month}/${Year}`;
    console.log(`${Day}/${Month}/${Year}`);
    console.log(States);

    if(Loading === true){
        return(
            <div>
                <Header />
                <Content>
                    <DataContainer>
                    <div className="DataHeader">
                        <strong>Atualizado dia: {formatedDate}</strong>
                    </div>
                    <div className="loadingArea">
                        <img id="loadingImg" src={LoadingGif} alt="Loading"/>
                    </div>
                    </DataContainer>
                </Content>
                <Footer />
            </div>
        )
    }else{
        return (
            <div>
                <Header />
                <Content>
                    <DataContainer>
                        <div className="DataHeader">
                            <strong>Atualizado dia: {formatedDate}</strong>
                        </div>
                        <div className="cardsArea">
                            {
                                States.map(State => (
                                    <Container style={{ margin: 20, }} key={State.uid}>
                                        <CardHeader>{State.state}</CardHeader>
                                        <CovidHeader>COVID-19</CovidHeader>
                                        <CovidContent>
                                            <CovidLeft>
                                                <CovidDataTitle>Casos</CovidDataTitle>
                                                <CovidDataTitle>Suspeitos</CovidDataTitle>
                                                <CovidDataTitle>Mortes</CovidDataTitle>
                                            </CovidLeft>
                                            <CovidRight>
                                                <CovidData>{ State.cases }</CovidData>
                                                <CovidData>{ State.suspects }</CovidData>
                                                <CovidData>{ State.deaths }</CovidData>
                                            </CovidRight>
                                        </CovidContent>
                                    </Container>
                                ))
                            }
                        </div>
                    </DataContainer>
                </Content>
                <Footer />
            </div>
          );
    }
}

export default Brazil;