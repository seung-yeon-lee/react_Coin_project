import { SET_USER } from '../actions/userAction';

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
