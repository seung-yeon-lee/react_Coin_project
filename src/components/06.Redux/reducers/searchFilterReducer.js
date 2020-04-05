import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value,
        // 기존 검색 항목과 새 검색 항목을 객체 형태로 병합.
        // ex) {name:'hello'}인 state에서, { age: 20}이 병합되면 2개의 검색 조건 검색 가능
      };
    }
    case RESET_FILTER: {
      return initState;
    }
    default:
      return state;
  }
}
