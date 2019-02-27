import { actionType } from '../actions';

type state = {
  id: number;
  completed: boolean;
};
const todos = (state: state[] = [], action: actionType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
};

export default todos;
