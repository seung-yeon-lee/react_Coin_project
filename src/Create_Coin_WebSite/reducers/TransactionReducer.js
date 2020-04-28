// 거래목록 정보를 그래프DB 구조로 저장
import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/TransactionActions';

import { handle } from 'redux-pack';

import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

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

    // redux-pack 적용 후 바꾼 action들에 대한 reducer 수정하는 부분
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        //case LOADING_TRANSACTION_LIST와 동일
        start: prevState => ({
          ...prevState,
          loading: true,
          hasError: false,
        }),
        //case SET_TRANSACTION_LIST와 거의 유사
        success: prevState => {
          const { data } = payload;
          const ids = data.map(entity => entity['id']);
          const entities = data.reduce(
            (finalEntities, entity) => ({
              ...finalEntities,
              [entity['id']]: entity,
            }),
            {},
          );
          return {
            ...prevState,
            ids,
            entities,
            loading: false,
            hasError: false,
          };
        },
        //case SET_ERROR와 거의 유사
        failure: prevState => {
          const { errorMessage } = payload.response.data;
          //case문의 type은 redux-pack에서 넘어온 액션 type과 비교, handle함수는 각 비동기 작업에
          //맞도록 스토어 데이터(transaction)를 반환, 단 payload의 경우 pack에서 보내준걸
          //사용하므로 response.data 사용으로 기존 구성과 약간 다름
          return {
            ...prevState,
            loading: false,
            hasError: true,
            errorMessage,
          };
        },
      });
    }
    default:
      return state;
  }
};
