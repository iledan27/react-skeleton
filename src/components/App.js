import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Menu from './common/Menu';
import NotFoundPage from './NotFoundPage';
import { connect } from 'react-redux';
import * as homepageActions from '../redux/actions/homepageActions';

const App = props => {
  useEffect(() => {
    props.loadNumber().catch(error => {
      alert('loading number faild' + error);
    });
  }, []);

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
};

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

const mapDispatchToProps = {
  loadNumber: homepageActions.loadNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
