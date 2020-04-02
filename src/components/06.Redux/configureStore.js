//스토어 설정 파일
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

export default initialStates =>
  createStore(combineReducers(reducers), initialStates, composeWithDevTools());
