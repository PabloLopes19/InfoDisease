import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';

import './GlobalStyles.css';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes/routes';
import { ThemeName, themes } from './styles/themes';

import Header from './components/Header';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
