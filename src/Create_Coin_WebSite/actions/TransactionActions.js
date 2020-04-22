// sever data를 받기위해 redux 사용,  axios를 통해 전달 받은 데이터를 redux로 관리

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}
