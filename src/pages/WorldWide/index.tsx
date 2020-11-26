import React, { useEffect, useState } from 'react';

import { Page, DataContainer } from './styles';

// Components
import Footer from '../../components/Footer';

import { BiSearchAlt } from 'react-icons/bi';
import './styles.css';
import LoadingGif from '../../assets/Pulse-1s-200px(1).gif';

import api from '../../services/api';
import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from '../../components/Cards/styles';

const WorldWide: React.FC = () => {
  const [Countries, setCountries] = useState<any>([]);
  const [timeDate, setTimetDate] = useState('DD/MM/YYYY');
  const [Loading, setLoading] = useState(true);
  const [Search, setSearch] = useState('');

  const formatter = new Intl.NumberFormat('en');

  useEffect(() => {

    api.get('/api/report/v1/countries')
    .then(response => {

      setCountries(response.data.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })

    window.scrollTo(0, 0);
  }, []);

  setTimeout(() => {
      var date = new Date();
      var Day = date.getDate();
      var Month = date.getMonth() + 1;
      var Year = date.getFullYear();
      
      setTimetDate(`${Day}/${Month}/${Year}`);
  }, 1000);

  const filterCountryData = Countries.filter(Country => {
      return Country.country.toLowerCase().includes(Search.toLowerCase());
  })

  if(Loading === true){
    return (
      <Page>
          <div className="Content">
            <div className="SearchArea">
                <BiSearchAlt id="searchIcon"/>
                <input type="text" placeholder="Buscar país específico..." />
              </div>
              <DataContainer>
                <div className="DataHeader">
                  <strong>Atualizado dia: {timeDate}</strong>
                </div>
                <div className="CardsArea">
                  <div className="loadingArea">
                    <img id="loadingImg" src={LoadingGif} alt="Loading"/>
                  </div>
                </div>
              </DataContainer>
          </div>
        <Footer />
      </Page>
    );
  }else{
    return (
      <Page>
          <div className="Content">
            <div className="SearchArea">
                <BiSearchAlt id="searchIcon"/>
                <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Buscar país específico..." />
              </div>
              <DataContainer>
                <div className="DataHeader">
                  <strong>Atualizado dia: {timeDate}</strong>
                </div>
                <div className="CardsArea">
                  {
                    filterCountryData.map((Country, index) => (
                      <Container style={{ margin: 20, }} key={index}>
                        <CardHeader>{Country.country}</CardHeader>
                        <CovidHeader>COVID-19</CovidHeader>
                        <CovidContent>
                          <CovidLeft>
                              <CovidDataTitle>Ativos</CovidDataTitle>
                              <CovidDataTitle>Total</CovidDataTitle>
                              <CovidDataTitle>Mortes</CovidDataTitle>
                          </CovidLeft>
                          <CovidRight>
                              <CovidData>{ formatter.format(Country.cases) }</CovidData>
                              <CovidData>{ formatter.format(Country.confirmed) }</CovidData>
                              <CovidData>{ formatter.format(Country.deaths) }</CovidData>
                          </CovidRight>
                        </CovidContent>
                      </Container>
                    ))
                  }
                </div>
              </DataContainer>
          </div>
        <Footer />
      </Page>
    );
  }
}

export default WorldWide;