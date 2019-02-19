import React from 'react'

type Props = {
  fuga: number;
  handleClick: () => any;
}
export default class App extends React.Component<Props> {
  render() {
    return <div>
      <span>{this.props.fuga}</span>
      <button onClick={ () => this.props.handleClick() }>増加</button>
    </div>
  }
}