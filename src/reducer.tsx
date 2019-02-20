import { initialState } from './component/app';

export default function reducer(state = initialState, action: any) {
  switch(action.type) {
    case 'INCREMENT': {
      return { fuga: state.fuga + 1 }
    }
    default:
      return state
  }
}