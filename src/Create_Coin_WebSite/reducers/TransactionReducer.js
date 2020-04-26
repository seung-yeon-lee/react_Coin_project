// 거래목록 정보를 그래프DB 구조로 저장
import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/TransactionActions';

const initState = {
  ids: [],
  entities: {},
  loading: false, //loading 초깃값
  hasError: false, //오류상태를 위한 초깃값
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true, // action 발생 => true
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map(entity => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities, loading: false, hasError: false }; //기존 setTransaction 액션이 들어오면 false
    }
    default:
      return state;
  }
};
