import { visibilityFilters, actionType } from '../actions';

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action: actionType) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
