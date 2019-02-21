import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import App from '../component/app';
import { initialState } from '../component/app';
import { increment } from '../action/app';

const mapStateToProps = (state: typeof initialState) => ({
  hoge: 10,
  fuga: state.fuga
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  hoge: 10,
  handleClick: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);