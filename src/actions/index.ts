
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// let nextTodoId = 0;
const nextTodoId = 0;

export type actionType = {
  type: string;
  id: number;
  payload: any;
};

interface AppAction {
  type: string;
  payload?: any;
}

export const addTodo = (text: string): AppAction => ({
  type: ADD_TODO as typeof ADD_TODO,
  payload: {
    text,
    id: nextTodoId + 1,
  },
});

export const setVisibilityFilter = (filter :any): AppAction => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: { filter },
});

export const toggleTodo = (id: number): AppAction => ({
  type: TOGGLE_TODO as typeof TOGGLE_TODO,
  payload: {
    id,
  },
});

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
