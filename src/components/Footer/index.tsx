import React from 'react';

import { Container, Content, Copyright, Button, Github, Info, Virus, Share } from './styles';
import './styles.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

toast.configure();

function Footer() {
  
  const alert = () => { 
    toast.success('Link Copiado!');
  }
  
  return (
    <Container>
        <Content>
            <Link to="/about" className="btnLinkFooter"><Info className="icon"/><p className="btnText">Info</p></Link>
            <Button className="btnLinkFooter" href="https://github.com/PabloLopes19/WeatherApp" target="_blank"><Github className="icon"/><p className="btnText">Github</p></Button>
            <Link to="/cares" className="btnLinkFooter"><Virus className="icon"/><p className="btnText">Cuidados</p></Link>
            <CopyToClipboard text="infodisease.vercel.app/">
              <Button onClick={alert} className="btnLinkFooter"><Share className="icon"/><p className="btnText" style={{ fontSize: 10, }}>Compartilhar</p></Button>
            </CopyToClipboard>
        </Content>
        <Copyright>InfoDisease | 2021</Copyright>
    </Container>  
  );
}

export default Footer;