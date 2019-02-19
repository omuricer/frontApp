import React from 'react';
import { connect } from 'react-redux';

import App from '../component/app';
// import { increment } from '../action/app';
import action from '../action/app';

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleClick: () => { dispatch(action.increment()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);