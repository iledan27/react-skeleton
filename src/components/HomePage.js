import React from 'react';
import { connect } from 'react-redux';
import * as homepageActions from '../redux/actions/homepageActions';

const HomePage = props => {
  return (
    <>
      <div>number: {props.number}</div>
      <br />
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

const mapDispatchToProps = {
  increment: homepageActions.increment,
  decrement: homepageActions.decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
