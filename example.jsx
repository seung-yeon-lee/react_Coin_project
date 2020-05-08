// import { handle } from 'redux-pack';
// import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from './actionTypes';

// // 리듀서 모듈화 작업, 인자로 전달된 이름맞게 return
// // 서로 다른 데이터를 처리할때 같은 action 사용, 액션에 포함시킨
// //meta의 resourceName과 리듀서의 이름이 일치한 경우에만 실행되도록 구현

// export default (...reducerNames) => {
//   return reducerNames.reduce((apiReducer, name) => {
//     const initState={
//       ids:[],
//       entities: {},
//       loadingState:{
//         [`${CREATE}/${name}`]: false,
//         [`${FETCH}/${name}`]: false,
//         [`${UPDATE}/${name}`]: false,
//         [`${FETCH_LIST}/${name}`]: false,
//       },
//       errorState:{
//         [`${CREATE}/${name}`]: false,
//         [`${FETCH}/${name}`]: false,
//         [`${UPDATE}/${name}`]: false,
//         [`${FETCH_LIST}/${name}`]: false,
//       },
//       pagination:{},
//     };
//     apiReducer[name] = (state=initState, action) => {
//       const { type, payload, meta} = action;
//       const {resourceName, key} = meta || {}; //action meta 참조
//       if(resourceName !== name){
//         // resouceName과 reducer name이 일치하지않다면 그냥 반환
//         return state;
//       };
//       switch(type){
//         case UPDATE:
//         case FETCH:
//         case CREATE:
//         case FETCH_LIST:{
//           return handle(state, action, {
//             start: prevState => ({
//               ...prevState,
//               loadingState:{
//                 ...prevState.loadingState,
//                 [`${type}/${name}`]: true,
//               },
//               errorState:{
//                 ...prevState.errorState,
//                 [`${type}/${name}`]: false,
//               },
//             }),
//             success: prevState => {
//               const { data } = payload;
//               if(type === FETCH_LIST){
//                  const { pageNumber, pageSize} = meta || {};
//                  const ids = data.map(entity => entity[key]);
//                  const entities = data.reduce(
//                   (finalEntities, entitiy) => ({
//                     ...finalEntities,
//                     [entity[key]]: entitiy,
//                     //ex) bitcoin : { id: btx01, code: bitcoin ... }
//                     // result  btx01 : { id: btx01, code ....} 이런 형식으로 저장
//                     // key 부분은 = key= 'id'로 할당, 곧 결과값에 id를 key 값으로 쓰고,
//                     // 나머지 데이터를 value 로 쓰겠다
//                    }),
//                    {},
//                  );
//                  return{
//                    ...prevState,
//                    ids,
//                    entities: { ...prevState.entities, ...entities},
//                    loadingState: {
//                      ...prevState.loadingState,
//                      [`${type}/${name}`]: false,
//                    },
//                    errorState:{
//                      ...prevState.errorState,
//                      [`${type}/${name}`]: false,
//                    }
//                  }
//               }
//             },
//             failure: prevState => {
//               const { errorMessage } = payload.response? payload.response.data : {}
//               return{
//                 ...prevState,
//                 loadingState: {
//                   ...prevState.loadingState,
//                   [`${type}/${name}`]: false,
//                 },
//                 errorState:{
//                   ...prevState.errorState,
//                   [`${type}/${name}`]: errorMessage || true,
//                 }
//               }
//             }
//           })
//         }
//       }

//     }
//   },{})
// }

import { FETCH_LIST, UPDATE, CREATE, RESET, FETCH } from './actionTypes';
import Api from '../Api';

// //Router 나가기 전에 한번 빠르게 훑어 보고

// export default (resourceName, key = 'id') => ({
//   collection: (params = {}, meta = {}) => ({
//     type: FETCH_LIST,
//     promise: Api.get(resourceName, { params }),
//     meta: { ...meta, key, resourceName },
//   }),
//   member: (id, params = {}, meta = {}) => ({
//     type: FETCH,
//     promise: Api.get(`${resourceName}/${id}`, { params }),
//     meta: { ...meta, key, resourceName },
//   }),
//   create: (data, params = {}, meta = {}) => ({
//     type: CREATE,
//     promise: Api.post(resourceName, data, { params }),
//     meta: { ...meta, key, resourceName },
//   }),
//   update: (id, data, params = {}, meta = {}) => ({
//     type: UPDATE,
//     promise: Api.put(`${resourceName}/${id}`, data, { params }),
//     meta: { ...meta, key, resouceName },
//   }),
//   reset: () => ({
//     type: RESET,
//     meta: { resourceName },
//
export default (resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: Api.get(resourceName, { params }),
    meta: { ...meta, key, resourceName },
  }),
  member: (id, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: { ...meta, key, resourceName },
  }),
  create: (data, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, data, { params }),
    meta: { ...meta, key, resourceName },
  }),
});
