const initialState = false; //초깃값
import { SET_LOADING } from '../actions/loadingAction';

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return payload;
    }
    default:
      return state;
  }
}
