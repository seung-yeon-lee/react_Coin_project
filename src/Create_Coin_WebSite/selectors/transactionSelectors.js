// selector로 store data 변환,
// 스토어 데이터를 컴포넌트에 전달하기 위해 지금까지 mapStateToProps()함수와 데이터컴포넌트를 조합
// 셀렉터는 스토어와 컴포넌트 사이에 위치,  데이터 컴포넌트의 map함수에서 작업을 담당했지만 이제는 셀렉터가 대신 할 것

//거래 목록 로딩 상태의 값을 참조하는 목록 데이터 컴포넌트에 도입
import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';
import { createSelector } from 'reselect';

export const transactionsSelector = state => state.transactions;
// Store Data에서 거래 정보를 추출하는 셀렉터

// export const transactionListSelector = state => {
//   //그래프 DB 구조의 거래 목록 자료를 원본 배열로 변환하는 셀렉터
//   const { ids, entities } = transactionsSelector(state);
//   return ids.map(id => entities[id]);
// };
export const transactionListSelector = createSelector(
  //리셀렉트 적용, create함수의 첫번쨰 인자는 셀렉터 배열,
  // 두번쨰 인자는 셀렉터가 반환한 값을 이용하는 변환 작업 함수
  [transactionsSelector],
  transactions => {
    const { ids, entities } = transactions;
    return ids.map(id => entities[id]);
  },
);

export const loadingStateSelector = state => transactionsSelector(state).loadingState;
// 거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터
export const transactionListLoadingStateSelector = state =>
  loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// 전체 거래 목록 요청의 로딩 상태만을 추출하는 셀렉터
export const transactionCreateLoadingStateSelector = state =>
  loadingStateSelector(state)[CREATE_TRANSACTION];
//거래 생성 요청의 로딩 상태만을 추출하는 셀렉터

//작성한 셀렉터들은 모두 스토어 데이터를 인자로 받아 추출 또는 변환,
// 이 셀렉터들을 데이터 컴포넌트에 적용, => transactionListContiner.jsx
