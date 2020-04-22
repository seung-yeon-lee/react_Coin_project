import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { SET_TRANSACTION_LIST } from '../actions/TransactionActions';

const customMiddleware = store => nextRunner => action => {
  console.log('미들웨어에 전달된 액션 객체', action); //1
  console.log('리듀서 실행 전', store.getState()); //2
  const result = nextRunner(action); //3
  console.log('리듀서 실행 후', store.getState()); //4
  return result; //5
};

const customMiddleware2 = store => nextRunner => action => {
  console.log('미들웨어2 전달된 액션 객체', action); //6
  console.log('미들웨어2 실행 전', store.getState()); //7
  const result = nextRunner(action); //8
  console.log('미들웨어2 실행 후', store.getState()); //9
  return result; // 10
};
// 1,2,3(next middleware)-6,7,8-리듀서실행 -9,10(이전 미들웨어로 돌아감)-4-5

export default initStates =>
  createStore(
    combineReducers(reducers),
    initStates,
    applyMiddleware(customMiddleware, customMiddleware2),
  );
