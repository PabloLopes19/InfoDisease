import React from 'react';

import { Container, Content, Copyright, Button, Github, Info, Virus, Share } from './styles';
import './styles.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
        <Content>
            <Link to="/" className="btnLinkFooter"><Info className="icon"/><p className="btnText">Info</p></Link>
            <Button className="btnLinkFooter" href="https://github.com/PabloLopes19/WeatherApp" target="_blank"><Github className="icon"/><p className="btnText">Github</p></Button>
            <Link to="/cares" className="btnLinkFooter"><Virus className="icon"/><p className="btnText">Cuidados</p></Link>
            <Button className="btnLinkFooter"><Share className="icon"/><p className="btnText" style={{ fontSize: 10, }}>Compartilhar</p></Button>
        </Content>
        <Copyright>WeatherApp | 2020</Copyright>
    </Container>  
  );
}

export default Footer;