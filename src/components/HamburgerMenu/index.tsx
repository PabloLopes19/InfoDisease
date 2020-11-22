import React from 'react';
// import { View } from 'react-native';

import { Container } from './styles';
import { Link } from 'react-router-dom';
import { WeatherAppTitle, WheaterAppTitleBold } from '../Header/styles';

import { GiBrazil } from 'react-icons/gi';
import { AiFillGithub } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { BiWorld, BiInfoCircle } from 'react-icons/bi';

import './styles.css';

const HamburgerMenu: React.FC = () => {
  return (
    <Container >
        <div className="menu">
            <div className="header">
                <CgClose id="closeButton"/>
            </div>
            <ul className="menuText">
                <Link id="menuTextButton" to="/brazil"><li><GiBrazil id="icon"/> Brasil</li></Link>
                <Link id="menuTextButton" to="/worldwide"><li><BiWorld id="icon"/> Mundo</li></Link>
                <Link id="menuTextButton" to="/about"><li><BiInfoCircle id="icon"/> Sobre</li></Link>
                <Link id="menuTextButton" to="/"><li><AiFillGithub id="icon"/> Contribuir</li></Link>
            </ul>
        </div>
        <div className="footer">
            <WeatherAppTitle style={{ transform: 'translateX(0)' }} id="Logo">Info<WheaterAppTitleBold>Disease</WheaterAppTitleBold></WeatherAppTitle>
        </div>
    </Container>
  );
}

export default HamburgerMenu;