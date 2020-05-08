// Router reducer 작성 후 리듀서 관리파일에 등록, set_location 액션 처리

import { SET_LOCATION } from '../actions/routerActions';

const initState = {
  location: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOCATION: {
      const { location } = payload;
      return { ...state, location };
    }
    default:
      return state;
  }
};

// reducer 관리 파일에 등록 => 주소 동기화 컴포넌트 작성하기 (RouterStateContainer.jsx)
