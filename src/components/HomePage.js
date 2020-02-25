import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as homepageActions from '../redux/actions/homepageActions';

const HomePage = props => {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video:true, audio: true})
      .then((stream) => {
        document.querySelector('#player').srcObject = stream;
        console.log(stream);
      }).catch(err => {
        console.log(document.querySelector('#player'));
      });
  }, []);

  return (
    <>
      <div>number: {props.number}</div>
      <br />
      <video id="player" autoPlay></video>
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
