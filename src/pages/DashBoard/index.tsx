import React, { useEffect, useState } from 'react';

import { Page, Content, Title, TitleMedium, Description, CardsArea, Cards, LinkArea, LinkText, CardContainer, HorizontalDiv, GlobeIcon, BrazilIcon, CardContainerText } from './styles';
import { Container, CardHeader, CovidHeader, CovidData, CovidLeft, CovidRight, CovidContent, CovidDataTitle } from '../../components/Cards/styles';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import Footer from '../../components/Footer';

import LoadingGif from '../../assets/Pulse-1s-200px(1).gif';

import api from '../../services/api';


function DashBoard() {''
    const [Brazil, setBrazil] = useState<any>([]);
    const [USA, setUSA] = useState<any>([]);
    const [China, setChina] = useState<any>([]);
    const [Loading, setLoading] = useState(true);


    SwiperCore.use([ Navigation, Pagination ]);

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
              <Title id="Title">Seja bem-vindo!</Title>
              <Description id="Descritpion2">
                O InfoDisease é uma aplicação voltada para o fornecimento e análise de dados sobre o avanço do corona vírus (COVID-19) dentro e fora do Brasil. Você terá acesso a dados sobre o número de vítimas, de recuperados e de infectados em todos os estados brasileiros e em todos os países no mundo. Caso você não queira ver todos os dados, você pode fazer uma pesquisa para filtrar os dados, tendo fazer a busca com os nomes dos países em inglês.
              </Description>
              <CardsArea>
                  <TitleMedium>Dados de países</TitleMedium>
                    <div className="loadingArea">
                        <img id="loadingImg" src={LoadingGif} alt="Loading"/>
                    </div>
              </CardsArea>
              <Title>COVID-19</Title>
              <Description id="Descritpion2">
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
              <Title id="Title">Seja bem-vindo!</Title>
              <Description id="Descritpion2">
                O InfoDisease é uma aplicação voltada para o fornecimento e análise de dados sobre o avanço do corona vírus (COVID-19) dentro e fora do Brasil. Você terá acesso a dados sobre o número de vítimas, de recuperados e de infectados em todos os estados brasileiros e em todos os países no mundo. Caso você não queira ver todos os dados, você pode fazer uma pesquisa para filtrar os dados, tendo fazer a busca com os nomes dos países em inglês.
              </Description>
              <CardsArea>
                  <TitleMedium>Dados de países</TitleMedium>
                  <Cards id="Cards">
                      <Container>
                          <CardHeader id="CardHeader">Brasil</CardHeader>
                          <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                          <CovidContent id="CovidContent">
                              <CovidLeft>
                                  <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData id="CovidData">{Brazil.cases}</CovidData>
                                  <CovidData id="CovidData">{Brazil.confirmed}</CovidData>
                                  <CovidData id="CovidData">{Brazil.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
  
                      <Container>
                          <CardHeader id="CardHeader">EUA</CardHeader>
                          <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                          <CovidContent id="CovidContent">
                              <CovidLeft>
                                  <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData id="CovidData">{USA.cases}</CovidData>
                                  <CovidData id="CovidData">{USA.confirmed}</CovidData>
                                  <CovidData id="CovidData">{USA.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
  
                      <Container>
                          <CardHeader id="CardHeader">{China.country}</CardHeader>
                          <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                          <CovidContent id="CovidContent">
                              <CovidLeft>
                                  <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                  <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                              </CovidLeft>
                              <CovidRight>
                                  <CovidData id="CovidData">{China.cases}</CovidData>
                                  <CovidData id="CovidData">{China.confirmed}</CovidData>
                                  <CovidData id="CovidData">{China.deaths}</CovidData>
                              </CovidRight>
                          </CovidContent>
                      </Container>
                  </Cards>

                  <div className="mobileCards">
                  <Swiper
                        className="Swiper"
                        id="Swiper"
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ dynamicBullets: true, clickable: true}}
                        >
                        <SwiperSlide>
                            <Container>
                                <CardHeader id="CardHeader">Brasil</CardHeader>
                                <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                                <CovidContent id="CovidContent">
                                    <CovidLeft>
                                        <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                        <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                        <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                                    </CovidLeft>
                                    <CovidRight>
                                        <CovidData id="CovidData">{Brazil.cases}</CovidData>
                                        <CovidData id="CovidData">{Brazil.confirmed}</CovidData>
                                        <CovidData id="CovidData">{Brazil.deaths}</CovidData>
                                    </CovidRight>
                                </CovidContent>
                            </Container>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Container>
                                <CardHeader id="CardHeader">EUA</CardHeader>
                                <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                                <CovidContent id="CovidContent">
                                    <CovidLeft>
                                        <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                        <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                        <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                                    </CovidLeft>
                                    <CovidRight>
                                        <CovidData id="CovidData">{USA.cases}</CovidData>
                                        <CovidData id="CovidData">{USA.confirmed}</CovidData>
                                        <CovidData id="CovidData">{USA.deaths}</CovidData>
                                    </CovidRight>
                                </CovidContent>
                            </Container>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Container>
                            <CardHeader id="CardHeader">{China.country}</CardHeader>
                            <CovidHeader id="covidDanger">Covid-19</CovidHeader>
                            <CovidContent id="CovidContent">
                                <CovidLeft>
                                    <CovidDataTitle id="CovidDataTitle">Ativos</CovidDataTitle>
                                    <CovidDataTitle id="CovidDataTitle">Total</CovidDataTitle>
                                    <CovidDataTitle id="CovidDataTitle">Mortes</CovidDataTitle>
                                </CovidLeft>
                                <CovidRight>
                                    <CovidData id="CovidData">{China.cases}</CovidData>
                                    <CovidData id="CovidData">{China.confirmed}</CovidData>
                                    <CovidData id="CovidData">{China.deaths}</CovidData>
                                </CovidRight>
                            </CovidContent>
                        </Container>
                        </SwiperSlide>
                    </Swiper>
                  </div>

                  <LinkArea>
                        <Link style={{ textDecoration: 'none' }} to="/worldwide">
                            <LinkText>Ver todos os países </LinkText>
                        </Link>
                  </LinkArea>
              </CardsArea>
              <Title id="Title">COVID-19</Title>
              <Description id="Descritpion2">
                  Por conta da pandemia mundial de COVID-19, o InfoDisease fornece informações para os seus usuários quanto ao número de infectados, recuperados e mortes em todos os países do mundo e todos os estados brasileiros. Você pode acessar a página dos estados brasileiros, onde terá o clima do estado e o avanço do corona vírus nesse estado. Você também pode ver o avanço da pandemia no resto do mundo, acessando os países listados no site.
              </Description>
              <HorizontalDiv id="HorizontalDiv">
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
              <Swiper
                        className="Swiper"
                        id="Swiper"
                        style={{ width: 280 }}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ dynamicBullets: true, clickable: true}}
                        >
                        <SwiperSlide>
                            <Link style={{ textDecoration: 'none' }} to="/brazil">
                                <CardContainer id="LinkData">
                                    <BrazilIcon id="LinkDataIcon"/>
                                    <CardContainerText>Brasil</CardContainerText>
                                </CardContainer>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link style={{ textDecoration: 'none' }} to="worldwide">
                                <CardContainer id="LinkData">
                                    <GlobeIcon id="LinkDataIcon"/>
                                    <CardContainerText>Mundo</CardContainerText>
                                </CardContainer>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
            </Content>
            <Footer />
        </Page>
    );      
  }

}

export default DashBoard;