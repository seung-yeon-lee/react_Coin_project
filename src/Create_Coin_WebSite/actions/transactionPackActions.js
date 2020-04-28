//거래 목록 요청 액션 함수, redux-pack을 추가했으므로 액션에 promise가 추가되면
// 비동기 상태를 처리하는 과정 진행, 밑 코드는 기존 requestTransactionList()액션 함수에
// redux-pack을 적용한 코드 , promise에 Api.get() 사용
import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TARANSACTION';

export function requestTransactionList(params) {
  return {
    //거래 목록 요청 action
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', { params }),
  };
} // data Component 액션 함수 교체 => transaction container, filterContainer;

//기존 거래 요청 함수, 모달 닫힘 기능인 onComplete를 이벤트함수로 구현 예정
// 밑에는 기존 redux-thunk 코드
// export function createTransaction(data, onComplete) {
//   return dispatch =>
//     Api.post('/transactions', data).then(
//       ({ data }) => {
//         dispatch(tradeComplete());
//         onComplete();
//       },
//       error => dispatch(setError(error.response.data.errorMessage)),
//     );
// }

// redux-pack Code

export function createTransaction(data, onComplete) {
  return {
    type: CREATE_TRANSACTION,
    promise: Api.post('/transactions', data),
    meta: {
      onSuccess: onComplete, //(모달 닫힘 기능을 이벤트 함수로 구현)
    }, // ==> TradeCoin... data 컴포넌트의 액션함수 변경예정
  };
}
