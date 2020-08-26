import React from 'react';

import { Container, WeatherAppLogo, WeatherAppTitle, Menu, Buttons, DarkModeButton, DarkModeIcon, Left, Right } from './styles';

function Header() {
  return (
      <Container>
        <Left>
          <WeatherAppLogo /><WeatherAppTitle>WeatherApp</WeatherAppTitle>
            <Menu>
              <Buttons className="button" href="#">Brasil</Buttons>
              <Buttons href="#">World Wide</Buttons>
              <Buttons href="#">About</Buttons>
              <Buttons href="#">Support Us</Buttons>
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