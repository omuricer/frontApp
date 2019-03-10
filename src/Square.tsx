import React from 'react';
import './index.css';

export type SquareType = string | null;
export interface Props {
  value: string | null;
  onClick: () => void;
}
function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
export default Square;