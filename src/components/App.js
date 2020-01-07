import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Menu from './common/Menu';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <div className='container'>
      <Menu />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
