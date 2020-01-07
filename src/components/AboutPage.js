import React from 'react';
import { connect } from 'react-redux';

const AboutPage = props => {
  return <div>This is about page with number {props.number}</div>;
};

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(AboutPage);
