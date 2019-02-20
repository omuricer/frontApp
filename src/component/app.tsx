import React from 'react'
import Button from 'react-bootstrap/Button';

export const initialState = {fuga: 1};
type Props = {
  hoge: number;
  fuga: number;
  handleClick: () => void;
}
type State = Readonly<typeof initialState>;
export default class App extends React.Component<Props, State> {
  render() {
    return <div>
      <span>{this.props.fuga + this.props.hoge}</span>
      <Button onClick={ () => this.props.handleClick() }>increment</Button>
    </div>
  }
}
