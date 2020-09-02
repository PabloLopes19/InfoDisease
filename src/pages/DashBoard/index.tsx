import React, { useEffect, useState } from 'react';

import { Container, Content, Title, TitleMedium, Description, CardsArea, Cards, Link, LinkText, CardContainer, HorizontalDiv, GlobeIcon, BrazilIcon, CardContainerText } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Cards';
import Footer from '../../components/Footer';

import api from '../../services/api';

function DashBoard() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    api.get('/api/report/v1/countries')
    .then(response => {
        // var myData = response.data.data.country;
        // console.log(`${response.data.data.country} possui ${response.data.data.cases} casos, ${response.data.data.deaths} mortes e ${response.data.data.recovered} recuperados`);        
        
        console.log(response.data.data);

    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  return (
      <Container>
          <Header />
          <Content> 
            <Title>Seja bem-vindo!</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <CardsArea>
                <TitleMedium>Dados de países</TitleMedium>
                <Cards>
                    <Card />
                    <Card />
                    <Card />
                </Cards>
                <Link>
                    <LinkText href="#">Ver todos os países </LinkText>
                </Link>
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
      </Container>
  );
}

export default DashBoard;