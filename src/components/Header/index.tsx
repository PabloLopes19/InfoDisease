import React from 'react';

import { Container, WeatherAppLogo, WeatherAppTitle, Menu, Buttons, DarkModeButton, DarkModeIcon, Left, Right } from './styles';
import { Link } from 'react-router-dom';
import './styles.css';

// import Routes from '../../routes';

function Header() {
  return (
      <Container>
        <Left>
          <WeatherAppLogo /><WeatherAppTitle><Link className="btnTextLogo" to="/">WeatherApp</Link></WeatherAppTitle>
            <Menu>
              <Link className="btnLink" to="/">Brasil</Link>
              <Link className="btnLink" to="/worldwide">Mundo</Link>
              <Link className="btnLink" to="/about">Sobre</Link>
              <Buttons className="btnLink" href="https://github.com/PabloLopes19/WeatherApp" target="_blank">Contribuir</Buttons>
            </Menu>
        </Left>
        <Right>
          <DarkModeButton>
            <DarkModeIcon />
          </DarkModeButton>
        </Right>
      </Container>
  );
}

export default Header;