// 거래목록 정보를 그래프DB 구조로 저장
import { SET_TRANSACTION_LIST } from '../actions/TransactionActions';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TRANSACTION_LIST: {
      const ids = payload.map(entity => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
