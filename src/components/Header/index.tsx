import React from 'react';

import { Container, WheaterAppTitleBold, WeatherAppTitle, Menu, Buttons, DarkModeButton, DarkModeIcon, Left, Right } from './styles';
import { Link } from 'react-router-dom';
import './styles.css';
import { ThemeName } from '../../styles/themes';

// import Routes from '../../routes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void; 
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');

    localStorage.setItem('theme', themeName);

    console.log(themeName);
  }

  return (
      <Container>
        <Left>
            <WeatherAppTitle><Link className="btnTextLogo" to="/">Info<WheaterAppTitleBold>Disease</WheaterAppTitleBold></Link></WeatherAppTitle>
            <Menu>
              <Link className="btnLink" to="/brazil">Brasil</Link>
              <Link className="btnLink" to="/worldwide">Mundo</Link>
              <Link className="btnLink" to="/about">Sobre</Link>
              <Buttons className="btnLink" href="https://github.com/PabloLopes19/WeatherApp" target="_blank">Contribuir</Buttons>
            </Menu>
        </Left>
        <Right>
          <DarkModeButton>
            <DarkModeIcon onClick={toggleTheme}/>
          </DarkModeButton>
        </Right>
      </Container>
  );
}

export default Header;