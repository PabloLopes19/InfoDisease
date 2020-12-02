import React, { useEffect } from 'react';

import { Container, Content, PageTitle, PeopleTitle, RepButton } from './styles';

//Components
import Footer from '../../components/Footer';
import LargeCard from '../../components/PeopleCardLarge';
import SquareCard from '../../components/PeopleCardSquare';
import { CardContainer } from '../../pages/DashBoard/styles';
import ApiCard from '../../components/apiCardLarge';

import { GrReactjs, GrNode } from 'react-icons/gr';
import { AiFillFileText } from 'react-icons/ai';

import './styles.css';

const About: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
      <Container>
          <Content>
            <PageTitle id="Title">Sobre nós</PageTitle>
            <PeopleTitle>Desenvolvedores</PeopleTitle>

            <LargeCard />

            <PeopleTitle style={{ marginTop: 100, }}>Professores</PeopleTitle>

            <SquareCard />
            
            <div className="usedTechs">
              <PeopleTitle>Tecnologias usadas</PeopleTitle>

              <div className="techButtons">
                <a rel="noopener noreferrer" href="https://pt-br.reactjs.org/" target="_blank">
                  <CardContainer className="btnTech">
                    <GrReactjs size={150} className="techIcon" />
                    <p>ReactJs</p>
                  </CardContainer>
                </a>
                <a rel="noopener noreferrer" href="https://nodejs.org/en/" target="_blank">
                  <CardContainer className="btnTech">
                    <GrNode size={150} className="techIcon"/>
                    <p>NodeJs</p>
                  </CardContainer>
                </a>
              </div>
              <RepButton id="RepButton" href="https://github.com/PabloLopes19/WeatherApp" target="_blank">Acesse o nosso repositório</RepButton>
            </div>

            <div className="usedApis">
              <PeopleTitle>APIs usadas</PeopleTitle>

              <ApiCard />
            </div>
            <div className="downloadArtigo">
              <a href={require('../../assets/pdfDocs/Artigo Projeto Integrador 2020 - InfoDisease.pdf')} download="Artigo_InfoDisease.pdf" className="btnTech">
                <CardContainer className="btnTech"  > 
                  <AiFillFileText size={150} className="techIcon"/>
                  <p>Baixe o artigo</p>
                </CardContainer>
              </a>

              <div className="ThanksText">
                <h1>Obrigado!</h1>
                <p>Equipe InfoDisease</p>
              </div>
            </div>
          </Content>

          <Footer />
      </Container>
  );
}

export default About;