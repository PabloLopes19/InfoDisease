import React from 'react';

import { Container, ContainerTop, ContainerTopLeft, ContainerTopRight, Bottom, AccessButton } from './styles';

import './styles.css';

const apiCardLarge: React.FC = () => {
  return (
      <Container>
          <ContainerTop>
              <ContainerTopLeft>
                  <h1 className="repName">COVID-19 API</h1>
                  <a className="repLink" rel="noopener noreferrer" target="_blank" href="https://covid19-brazil-api.now.sh/" >https://covid19-brazil-api.now.sh/</a>
              </ContainerTopLeft>
              <ContainerTopRight>
                <div className="text">
                    <h1 className="repName">Devs</h1>
                    <div className="devs">
                        <p className="dev">Arthur Ribeiro</p>
                        <p className="dev">Pedro Queiroz</p>
                    </div>
                </div>
                <div className="button">
                    <AccessButton rel="noopener noreferrer" target="_blank" href="https://github.com/devarthurribeiro/covid19-brazil-api" >Acessar</AccessButton>
                </div>
              </ContainerTopRight>
          </ContainerTop>
          <Bottom>
              <p>Todos os dados dessa aplicação foram fornecidos pela COVID-19 API criada por Arthur Ribeiro e Pedro Queiroz (Obrigado <span>&#128512;</span>). Caso queira ter mais informações sobre o projeto deles e dar força para o incrível trabalho que eles fizeram, os links do site e repositório deles está aqui no card.</p>
          </Bottom>
      </Container>
  );
}

export default apiCardLarge;