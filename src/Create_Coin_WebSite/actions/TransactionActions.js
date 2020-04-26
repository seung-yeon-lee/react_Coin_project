// sever data를 받기위해 redux 사용,  axios를 통해 전달 받은 데이터를 redux로 관리
import Api from '../Api';

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';
export const TRADE_COMPLETE = 'transaction/TRADE_COMPLETE';

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}
//검색통해 거래목록 불러오기 위한 액션 함수, params를 인자로 받음
export function requestTransactionList(params) {
  return dispatch => {
    dispatch(loading()); //server data를 호출 전 loading액션 호출, 로딩상태  표시 화면 출력 => 서버에서 작업 완료시 setTran..호출 후 loading = false
    Api.get('/transactions', { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      error => {
        dispatch(setError(error.response.data.errorMessage));
      },
      // 오류발생 setError 실행, axios는 서버에 데이터를 호출할 떄 오류가
      // 발생하면 비동기 함수(then)의 두번쨰 인자에 해당하는 함수를 호출
      // error에는 axios를 통해 받은 서버의 오류 관련 객체가 들어있음
    );
  };
}
// thunk에 의해 함수가 반환하는 값이 객체가 아니라 함수, 그렇기떄문에 Api.get... 이후에 dispatch 호출가능.
export function loading() {
  //서버 지연 상태 알려주기 action
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}
// json-server 이용한 오류상태 출력을 위한 action
export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}

export function tradeComplete() {
  //거래과정 메시지 알림창 표시하기 위한 action
  return { type: TRADE_COMPLETE };
}

export function createTransaction(data, onComplete) {
  //서버에 거래 생성 요청 함수
  return dispatch =>
    Api.post('/transactions', data).then(
      ({ data }) => {
        dispatch(tradeComplete());
        onComplete();
      },
      error => dispatch(setError(error.response.data.errorMessage)),
    );
}
