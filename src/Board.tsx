import React from 'react';
import styled from 'styled-components';
import './index.css';
import Square, {SquareType} from './Square';

export interface State {
  squares: Array<SquareType>;
}
interface Props {
  squares: Array<SquareType>;
  onClick: (i: number) => void;
}
class Board extends React.Component<Props> {
  renderSquare(i: number) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;