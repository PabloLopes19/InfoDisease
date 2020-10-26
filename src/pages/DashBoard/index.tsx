import React, { useEffect, useState } from 'react';

import { Page, Content, Title, TitleMedium, Description, CardsArea, Cards, LinkArea, LinkText, CardContainer, HorizontalDiv, GlobeIcon, BrazilIcon, CardContainerText } from './styles';
import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from '../../components/Cards/styles';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import LoadingGif from '../../assets/Pulse-1s-200px(1).gif';

import api from '../../services/api';

function DashBoard() {
    const [Brazil, setBrazil] = useState<any>([]);
    const [USA, setUSA] = useState<any>([]);
    const [China, setChina] = useState<any>([]);
    const [Loading, setLoading] = useState(true);


  useEffect(() => {
    api.get('/api/report/v1/Brazil')
    .then(response => {
        setBrazil(response.data.data);
    })
    .catch(err => {
        console.log(err);
    })
    
    
    api.get('/api/report/v1/US')
    .then(response => {
        setUSA(response.data.data);
    })
    .catch(err => {
        console.log(err);
    })
    
    
    api.get('/api/report/v1/China')
    .then(response => {
        setChina(response.data.data);
        setLoading(false);
    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  if(Loading === true){
    return (
        <Page>
            <Content> 
              <Title>Seja bem-vindo!</Title>
              <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
              <CardsArea>
                  <TitleMedium>Dados de países</TitleMedium>
                    <div className="loadingArea">
                        <img id="loadingImg" src={LoadingGif} alt="Loading"/>
                    </div>
              </CardsArea>
              <Title>COVID-19</Title>
              <Description>
                  Por conta da pandemia mundial de COVID-19, o WeatherApp está fornecendo informações para os seus usuários quanto ao número de infectados, recuperados e mortes em todos os países do mundo e todos os estados brasileiros. Você pode acessar a página dos estados brasileiros, onde terá o clima do estado e o avanço do corona vírus nesse estado. Você também pode ver o avanço da pandemia no resto do mundo, acessar os países listados no site.
              </Description>
              <HorizontalDiv>
                  <CardContainer>
                      <BrazilIcon/>
                      <CardContainerText>Brasil</CardContainerText>
                  </CardContainer>
                  <CardContainer>
                      <GlobeIcon/>
                      <CardContainerText>Mundo</CardContainerText>
                  </CardContainer>
              </HorizontalDiv>
            </Content>
            <Footer />
        </Page>
    );
  }else {
    return (
        <Page>
            <Content> 
              <Title>Seja bem-vindo!</Title>
              <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Description>
              <CardsArea>
                  <TitleMedium>Dados de países</TitleMedium>
                  <Cards>
                      <Container>
                          <CardHeader>Brasil</CardHeader>
                          <CovidHeader>Covid-19</CovidHeader>
                          <CovidContent>
                              <CovidLeft>
                                  <CovidDataTitle>Ativos</CovidDataTitle>
                                  <CovidDataTitle>Total</CovidDataTitle>
                                  <CovidDataTitle>Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData>{Brazil.cases}</CovidData>
                                  <CovidData>{Brazil.confirmed}</CovidData>
                                  <CovidData>{Brazil.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
  
                      <Container>
                          <CardHeader>EUA</CardHeader>
                          <CovidHeader>Covid-19</CovidHeader>
                          <CovidContent>
                              <CovidLeft>
                                  <CovidDataTitle>Ativos</CovidDataTitle>
                                  <CovidDataTitle>Total</CovidDataTitle>
                                  <CovidDataTitle>Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData>{USA.cases}</CovidData>
                                  <CovidData>{USA.confirmed}</CovidData>
                                  <CovidData>{USA.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
  
                      <Container>
                          <CardHeader>{China.country}</CardHeader>
                          <CovidHeader>Covid-19</CovidHeader>
                          <CovidContent>
                              <CovidLeft>
                                  <CovidDataTitle>Ativos</CovidDataTitle>
                                  <CovidDataTitle>Total</CovidDataTitle>
                                  <CovidDataTitle>Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData>{China.cases}</CovidData>
                                  <CovidData>{China.confirmed}</CovidData>
                                  <CovidData>{China.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
                  </Cards>
                  <LinkArea>
                        <Link style={{ textDecoration: 'none' }} to="/worldwide">
                            <LinkText>Ver todos os países </LinkText>
                        </Link>
                  </LinkArea>
              </CardsArea>
              <Title>COVID-19</Title>
              <Description>
                  Por conta da pandemia mundial de COVID-19, o WeatherApp está fornecendo informações para os seus usuários quanto ao número de infectados, recuperados e mortes em todos os países do mundo e todos os estados brasileiros. Você pode acessar a página dos estados brasileiros, onde terá o clima do estado e o avanço do corona vírus nesse estado. Você também pode ver o avanço da pandemia no resto do mundo, acessar os países listados no site.
              </Description>
              <HorizontalDiv>
                  <Link style={{ textDecoration: 'none' }} to="/brazil">
                    <CardContainer>
                        <BrazilIcon/>
                        <CardContainerText>Brasil</CardContainerText>
                    </CardContainer>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to="worldwide">
                    <CardContainer>
                        <GlobeIcon/>
                        <CardContainerText>Mundo</CardContainerText>
                    </CardContainer>
                  </Link>
              </HorizontalDiv>
            </Content>
            <Footer />
        </Page>
    );      
  }

}

export default DashBoard;