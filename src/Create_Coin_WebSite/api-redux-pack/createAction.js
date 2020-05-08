// 액션 묶음 함수 생성, 커링패턴을 사용하여 데이터 서버에 요청할 자료를 인자로
// 전달받아 액션 함수를 반환하도록 구성, redux-pack의 비동기 항목과 데이터 호출함수(Api)를 합쳐서 구성

import { FETCH_LIST, UPDATE, CREATE, RESET, FETCH } from './actionTypes';
import Api from '../Api';

//서버에 요청할 자료를 인자로 받은 후 액션 함수
export default (resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: Api.get(resourceName, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  member: (id, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  create: (data, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: UPDATE,
    promise: Api.put(`${resourceName}/${id}`, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  reset: () => ({
    type: RESET,
    meta: { resourceName },
  }),
});

//meta 항목에 추가된 resourceName, key 항목은 reducer에서 참조할 예정
// resourceName은 스토어 데이터 항목(users, transaction)을 각각 리듀서에 분리하여 저장하기 위해 추가

// 지금까지 작성한 액션 묶음 함수(커링)을 사용하여 기존에있는 action 수정하기
//   transactionPackAction.js  <==
