//거래 목록 요청 액션 함수, redux-pack을 추가했으므로 액션에 promise가 추가되면
// 비동기 상태를 처리하는 과정 진행, 밑 코드는 기존 requestTransactionList()액션 함수에
// redux-pack을 적용한 코드 , promise에 Api.get() 사용
import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TARANSACTION';

const PAGE_SIZE = 10;

export function requestTransactionList(params, _page = 1) {
  return {
    //거래 목록 요청 action
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', {
      params: {
        ...params,
        _page,
        _limit: PAGE_SIZE,
        //api.get()의 params의 값으로 page,limit 추가, axios는 이 값을 자동으로 인식
      },
    }),
    meta: {
      pageNumber: _page, // _page,PAGE_SIZE를 각 변수에 대입하여 reducer로 전달
      pageSize: PAGE_SIZE,
      notification: {
        // 알림을 모듈화 하기 위한 작업
        //meta에 오류 메시지 포함하기, (거래 목록 요청 액션은 실패했을때만 알림 표시하고 오류 메시지를 액션 함수에 정의)
        error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
        success: '거래목록을 최신 정보로 업데이트 하였습니다.',
      },
    },
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
      notification: {
        // 거래 요청 함수에 알림 메시지 추가
        success: '거래가 성공적으로 완료되었습니다.',
      },
    }, // ==> TradeCoin... data 컴포넌트의 액션함수 변경예정
  };
}
