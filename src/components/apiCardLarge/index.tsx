import React from 'react';

import { Container, ContainerTop, ContainerTopLeft, ContainerTopRight, Bottom, AccessButton } from './styles';

import './styles.css';

const apiCardLarge: React.FC = () => {
  return (
      <Container>
          <ContainerTop>
              <ContainerTopLeft>
                  <h1 className="repName">COVID-19 API</h1>
                  <a className="repLink" rel="noopener noreferrer" href="https://covid19-brazil-api.now.sh/" >https://covid19-brazil-api.now.sh/</a>
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
                    <AccessButton rel="noopener noreferrer" href="https://github.com/devarthurribeiro/covid19-brazil-api" >Acessar</AccessButton>
                </div>
              </ContainerTopRight>
          </ContainerTop>
          <Bottom>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, sit ut pariatur in excepturi accusantium laborum. Iusto voluptas rem et adipisci, provident praesentium laborum earum accusantium quod enim labore in?</p>
          </Bottom>
      </Container>
  );
}

export default apiCardLarge;