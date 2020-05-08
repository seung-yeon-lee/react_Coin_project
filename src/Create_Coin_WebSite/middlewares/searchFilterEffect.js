// 검색 필터 미들웨어,
// 주소값이 변경되면 미들웨어에서 자동적으로 검색 목록 요청하도록 변경
// 검색 버튼 눌렀을떄 작동하는 구조 이므로,
// 검색 필터가 변경될떄 검색을 요청하는 과정을 미들웨어에서 작동하도록 추가

import { SET_FILTER } from '../actions/searchFilterActions';
import { requestTransactionList, resetTransactionList } from '../actions/transactionPackActions';

export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_FILTER) {
    const { params } = payload || {};
    store.dispatch(resetTransactionList()); //  검색결과를 요청하기 전에 현재 검색 목록 초기화
    store.dispatch(requestTransactionList(params));
  }
  return result;
};

// store에 작성한 middelware 등록
