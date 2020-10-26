import React, { useEffect } from 'react';

import { Container, Content, PageTitle, PeopleTitle } from './styles';

//Components
import Footer from '../../components/Footer';
import LargeCard from '../../components/PeopleCardLarge';
import SquareCard from '../../components/PeopleCardSquare';

const About: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
      <Container>
          <Content>
            <PageTitle>Sobre nós</PageTitle>
            <PeopleTitle>Desenvolvedores</PeopleTitle>

            <LargeCard />

            <PeopleTitle style={{ marginTop: 100, }}>Professores</PeopleTitle>

            <SquareCard />
          </Content>

          <Footer />
      </Container>
  );
}

export default About;