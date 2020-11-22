import React, { useState } from 'react';

import { Container, SideBarMenu, WheaterAppTitleBold, WeatherAppTitle, Menu, Buttons, DarkModeButton, DarkModeIcon, Left, Right } from './styles';
import { Link } from 'react-router-dom';
import './styles.css';
import { ThemeName } from '../../styles/themes';

import { GiHamburgerMenu, GiBrazil } from 'react-icons/gi';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { BiWorld, BiInfoCircle } from 'react-icons/bi';


interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void; 
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [open, setOpen] = useState<any>(false);

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');

    localStorage.setItem('theme', themeName);

    console.log(themeName);
  }

  const openMenu = () => setOpen(!open);

  return (
      <Container id="DesktopHeader">
        <Left id="left">
            <div className="hamburger">
              <button onClick={openMenu} className="burger">< GiHamburgerMenu/></button>
            </div>
            
            <SideBarMenu className="sideMenu" id={open ? 'sideMenu.open' : 'sideMenu'}>
              <div className="menu">
                  <div className="header">
                      <CgClose onClick={openMenu} id="closeButton"/>
                  </div>
                  <ul className="menuText">
                      <Link onClick={openMenu} id="menuTextButton" to="/"><li><AiFillHome id="icon"/> Home</li></Link>
                      <Link onClick={openMenu} id="menuTextButton" to="/brazil"><li><GiBrazil id="icon"/> Brasil</li></Link>
                      <Link onClick={openMenu} id="menuTextButton" to="/worldwide"><li><BiWorld id="icon"/> Mundo</li></Link>
                      <Link onClick={openMenu} id="menuTextButton" to="/about"><li><BiInfoCircle id="icon"/> Sobre</li></Link>
                      <a onClick={openMenu} id="menuTextButton" rel="noopener noreferrer" href="https://github.com/PabloLopes19/InfoDisease" target="_blank"><li><AiFillGithub id="icon"/> Contribuir</li></a>
                  </ul>
              </div>
                  <div className="footer">
                      <WeatherAppTitle style={{ transform: 'translateX(0)' }} id="Logo">Info<WheaterAppTitleBold>Disease</WheaterAppTitleBold></WeatherAppTitle>
                  </div>
            </SideBarMenu>

            <WeatherAppTitle id="Logo"><Link className="btnTextLogo" to="/">Info<WheaterAppTitleBold>Disease</WheaterAppTitleBold></Link></WeatherAppTitle>
            <Menu id="DesktopHeaderMenu">
              <Link className="btnLink" to="/brazil">Brasil</Link>
              <Link className="btnLink" to="/worldwide">Mundo</Link>
              <Link className="btnLink" to="/about">Sobre</Link>
              <Buttons className="btnLink" href="https://github.com/PabloLopes19/WeatherApp" target="_blank">Contribuir</Buttons>
            </Menu>
        </Left>
        <Right>
          <DarkModeButton id="DarkModeButton">
            <DarkModeIcon onClick={toggleTheme}/>
          </DarkModeButton>
        </Right>
      </Container>
  );
}

export default Header;