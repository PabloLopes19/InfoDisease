import React from 'react';

import { Container, ContainerTop, ContainerTopLeft, ContainerTopRight, Bottom, AccessButton } from './styles';

import './styles.css';

const apiCardLarge: React.FC = () => {
  return (
      <Container id="ApiCard">
          <ContainerTop id="ContainerTop">
              <ContainerTopLeft id="topLeft">
                  <h1 className="repName">COVID-19 API</h1>
                  <a id="vector" className="repLink" rel="noopener noreferrer" target="_blank" href="https://covid19-brazil-api.now.sh/" >https://covid19-brazil-api.now.sh/</a>
              </ContainerTopLeft>
              <ContainerTopRight>
                <div className="text">
                    <h1 id="vector" className="repName">Devs</h1>
                    <div className="devs">
                        <p className="dev">Arthur Ribeiro</p>
                        <p className="dev">Pedro Queiroz</p>
                    </div>
                </div>
                <div id="vector" className="button">
                    <AccessButton rel="noopener noreferrer" target="_blank" href="https://github.com/devarthurribeiro/covid19-brazil-api" >Acessar</AccessButton>
                </div>
              </ContainerTopRight>
          </ContainerTop>
          <Bottom id="vector">
              <p>Todos os dados dessa aplicação foram fornecidos pela COVID-19 API criada por Arthur Ribeiro e Pedro Queiroz (Obrigado <span>&#128512;</span>). Caso queira ter mais informações sobre o projeto deles e dar força para o incrível trabalho que eles fizeram, os links do site e repositório deles está aqui no card.</p>
          </Bottom>
      </Container>
  );
}

export default apiCardLarge;