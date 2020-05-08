// 리듀서 모듈화(커링패턴), 인자로 전달된 이름에 맞게 반환
// 서로 다른 데이터를 처리할때 같은 액션 type을 사용, 액션에 포함시킨  meta의
// resourceName과 리듀서의 이름이 일치한 경우에만 실행하도록 구현
import { handle } from 'redux-pack';
import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from './actionTypes';

export default (...reducerNames) => {
  return reducerNames.reduce((apiReducer, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${CREATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      errorState: {
        [`${CREATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      pagination: {},
      example: [],
    };
    apiReducer[name] = (state = initState, action) => {
      const { type, payload, meta } = action;
      const { resourceName, key } = meta || {};
      //   console.log(resourceName, name);
      if (resourceName !== name) {
        // resourceName과 리듀서 이름이 일치한 경우에만 리듀서 코드 실행
        return state;
      }
      switch (type) {
        case UPDATE:
        case FETCH:
        case CREATE:
        case FETCH_LIST: {
          return handle(state, action, {
            start: prevState => ({
              ...prevState,
              loadingState: {
                ...prevState.loadingState,
                [`${type}/${name}`]: true,
              },
              errorState: {
                ...prevState.errorState,
                [`${type}/${name}`]: false,
              },
            }),
            success: prevState => {
              const { data } = payload;
              if (type === FETCH_LIST) {
                const { pageNumber, pageSize } = meta || {};
                const ids = data.map(entitiy => entitiy[key]);
                const entities = data.reduce(
                  (finalEntities, entity) => ({
                    ...finalEntities,
                    [entity[key]]: entity,
                  }),
                  {},
                );
                return {
                  ...prevState,
                  ids,
                  entities: { ...prevState.entities, ...entities },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                  pagination: {
                    number: pageNumber,
                    size: pageSize,
                  },
                };
              } else {
                const id = data[key];
                return {
                  ...prevState,
                  id,
                  entities: { ...prevState.entities, [id]: data },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                  example: {
                    hello: 'bye',
                  },
                };
              }
            },
            failure: prevState => {
              const { errorMessage } = payload.response ? payload.response.data : {};
              return {
                ...prevState,
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: errorMessage || true,
                },
              };
            },
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducer;
  }, {}); //reducer 초깃값;
};

//RESET 항목이 추가된 부분과 커링 인자를 참조하여 로딩, 오류상태 객체의 키 이름을 정의하는 부분을 제외하면
//기존 transactionReducer와 비슷한 구조,  combine reducer 수정 ==>
