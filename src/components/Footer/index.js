import React from 'react';

import { Container, Content, Copyright, Button, Github, Info, Virus, Share } from './styles';

function Footer() {
  return (
    <Container>
        <Content>
            <Button title="Info"><Info/></Button>
            <Button title="Github" href="https://github.com/PabloLopes19/WeatherApp" target="_blank"><Github/></Button>
            <Button title="Cuidados"><Virus/></Button>
            <Button title="Compartilhar"><Share/></Button>
        </Content>
        <Copyright>WeatherApp | 2020</Copyright>
    </Container>  
  );
}

export default Footer;