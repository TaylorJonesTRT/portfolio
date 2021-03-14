import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Projects from './components/Projects';
import Blog from './components/Blog';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
