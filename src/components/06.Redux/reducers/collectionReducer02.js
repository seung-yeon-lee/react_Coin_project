//reduce() 함수로 객체 배열 자료 [ { id:1 },{ id:2} ] ... => 객체로 변경
import { SET_COLLECTION } from '../actions/collectionAction01';
import { SET_AGE } from '../actions/collectionAction02';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      // payload 하위에 ids와 entities를 저장
      const ids = payload.map((entity) => entity['id']); //배열 객체 id값 추출
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          // 실제 데이터, 객체로 변환한 다음 entities에 저장하며 객체의 키로 entitiy['id]사용
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }

    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age }, // id에 해당하는 age값 변경
        },
      };
    }
    default:
      return state;
  }
};
