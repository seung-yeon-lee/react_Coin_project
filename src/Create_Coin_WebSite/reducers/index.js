import transactions from './TransactionReducer';
import notification from './NotificationReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../api-redux-pack/createReducers';
import router from './routerReducer';

const apiReducers = createReducers('transactions', 'users');
// users 추가 후 로딩 상태 표시하기 위해 로딩 셀렉터 추가하기  =>,(selector file 수정)
// 스토어 설정 파일에 입력한 users와 동일한 이름을 셀렉터 생성함수에 전달

export default {
  ...apiReducers,
  notification,
  searchFilter,
  router,
};
