import React from 'react';

import { Container, Content, Copyright, Button, Github, Info, Virus, Share } from './styles';
import './styles.css';

function Footer() {
  return (
    <Container>
        <Content>
            <Button className="btnLink"><Info className="icon"/><p className="btnText">Info</p></Button>
            <Button className="btnLink" href="https://github.com/PabloLopes19/WeatherApp" target="_blank"><Github className="icon"/><p className="btnText">Github</p></Button>
            <Button className="btnLink"><Virus className="icon"/><p className="btnText">Cuidados</p></Button>
            <Button className="btnLink"><Share className="icon"/><p className="btnText" style={{ fontSize: 10, }}>Compartilhar</p></Button>
        </Content>
        <Copyright>WeatherApp | 2020</Copyright>
    </Container>  
  );
}

export default Footer;