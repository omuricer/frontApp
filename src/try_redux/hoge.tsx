import React from 'react'

interface Props {
  param: number;
}
export default class Hoge extends React.Component<Props> {
  render() {
    return <div>ほげ{this.props.param}</div>
  }
}
