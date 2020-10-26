import React, { useEffect, useState } from 'react';

import { Content, DataContainer } from './styles';
import api from '../../services/api';

import Footer from '../../components/Footer';

import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from '../../components/Cards/styles';

import './styles.css';
import LoadingGif from '../../assets/Pulse-1s-200px(1).gif';
import { BiSearchAlt } from 'react-icons/bi';

const Brazil: React.FC = () => {
    const [States, SetStates] = useState<any>([]);
    const [Loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [timeDate, setTimetDate] = useState('DD/MM/YYYY');

    useEffect(() => {
        api.get('/api/report/v1')
        .then(response => {
            SetStates(response.data.data);

            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });

        window.scrollTo(0, 0);
    }, []);

    setTimeout(() => {
        var date = new Date();
        var Day = date.getDate();
        var Month = date.getMonth() + 1;
        var Year = date.getFullYear();
        
        setTimetDate(`${Day}/${Month}/${Year}`);
    }, 1000);

    const filterStatesData = States.filter(State => {
        return State.state.toLowerCase().includes(search.toLowerCase());
    })

    if(Loading === true){
        return(
            <div>
                <Content>
                    <div className="SearchArea">
                        <BiSearchAlt id="searchIcon"/>
                        <input type="text" placeholder="Buscar estado específico..."/>
                    </div>
                    <DataContainer>
                    <div className="DataHeader">
                        <strong>Atualizado dia: {timeDate}</strong>
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
                <Content>
                    <div className="SearchArea">
                        <BiSearchAlt id="searchIcon"/>
                        <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Buscar estado específico..."/>
                    </div>
                    <DataContainer>
                        <div className="DataHeader">
                            <strong>Atualizado dia: {timeDate}</strong>
                        </div>
                        <div className="cardsArea">
                            {
                                filterStatesData.map(State => (
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