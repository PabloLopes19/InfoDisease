import React from 'react';
import { Switch, Route } from 'react-router-dom';  

// import { Container } from './styles';
import DashBoard from '../pages/DashBoard';
import WorldWide from '../pages/WorldWide';
import About from '../pages/About';

const routes: React.FC = () => {
  return (
    <Switch>
        <Route path="/" exact>
            <DashBoard />
          </Route>
        <Route path="/worldwide">
          <WorldWide />
        </Route>        
        <Route path="/about">
          <About />
        </Route>  
    </Switch>    
  );
}

export default routes;