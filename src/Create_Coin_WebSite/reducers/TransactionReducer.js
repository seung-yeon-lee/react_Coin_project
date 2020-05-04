// 거래목록 정보를 그래프DB 구조로 저장
import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/TransactionActions';

import { handle } from 'redux-pack';

import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  // loading: false, //loading 초깃값
  // hasError: false, //오류상태를 위한 초깃값
  loadingState: {
    [CREATE_TRANSACTION]: false, //거래 생성 action
    [FETCH_TRANSACTION_LIST]: false, //거래 목록 요청 action
  }, //기존 그래프 DB는 단 하나의 loading,errorMessage로 로딩, 오류를 관리
  // 앞으로는 거래 생성, 목룍 요청에 따라 로딩, 오류 상태를 관리할 예정
  errorState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false, //line 64
  },
  pagination: {}, // 거래목록 리듀서에있는 스토어 데이터 페이지 정보 항목 추가
  // 요청한 페이지의 번호와, 크기정보를 담음,  1. action 페이지 정보추가
  pages: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;
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
    case CREATE_TRANSACTION:
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        //handle함수의 세번째 인자인 객체(각 상태에 대한 처리과정)
        //case LOADING_TRANSACTION_LIST와 동일
        start: prevState => ({
          ...prevState,
          loading: true,
          hasError: false,
          loadingState: {
            // action type에 따라 loadingState값을 분리하여 저장
            ...prevState.loadingState,
            [type]: true,
          },
          errorState: {
            ...prevState.errorState,
            [type]: false,
          },
        }),
        //case SET_TRANSACTION_LIST와 동일
        //    create_transaction, or Fetch_transaction 요청 후 완료 시 success 실행
        success: prevState => {
          const { data } = payload;
          // 코인 거래 목록 생성 or 전체 코인 거래 목록 요청이 완료시, handle 함수의 success 구문이 실행,
          const loadingAndErrorState = {
            // FETCH,CREATE 모두에 해당하는 loadingstate, errorState의 초깃값 정의
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            //type이 거래 목록 요청 이라면
            // console.log(data);
            const { pageNumber, pageSize } = meta || {};
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
              ...loadingAndErrorState, // FETCH,CREATE 모두에 해당하는 loadingstate, errorState의 초깃값 정의
              ids,
              entities: { ...prevState.entities, ...entities },
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
              pages: {
                ...prevState.pages,
                [pageNumber]: ids,
              },
            };
          } else {
            const id = data['id']; // axios의 response 데이터 중 id 값을 추출
            return {
              ...prevState,
              ...loadingAndErrorState,
              id,
              entities: { ...prevState.entities, [id]: data }, //그래프DB의 entities 객체에 추가된 자료를 id 키값에 할당
            };
          }
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
            loadingState: {
              // action type에 따라 loadingState값을 분리하여 저장
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: errorMessage || true, //오류 메시지를 포함하지 않을 경우 true 할당, 오류 발생한 상태임을 표시
            }, // 이전 loading, hasError => loadingState, errorState로 관리
          };
        },
      });
    }
    default:
      return state;
  }
};
