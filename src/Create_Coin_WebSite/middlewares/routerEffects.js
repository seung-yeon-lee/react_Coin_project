// 주소 변경 액션과 검색 목록 요청 연동하기,
// 미들웨어를 추가하여 set_filter가 호출 될떄마다 자동으로 거래 검색 목록 요청을 하도록 구성
// 만약 주소 동기화 액션(SET_LOCATION)이 검색 필터 액션을 호출한다고 하면 검색결과를 요청할 수있음

// SET_LOCATION 이 SET_FILTER를 호출하기만 한다면 자동으로
// 검색 입력 항목 설정과 함께 검색 요청도 실행되도록 라우터 주소 항목 설정 미들웨어 추가

import { SET_LOCATION } from '../actions/routerActions';
import { setFilter } from '../actions/searchFilterActions';

function parse(qs) {
  // parse()를 사용하여 문자 형태의 queryString값을 객체로 변경
  const queryString = qs.substr(1); // substr() = 특정 문자열 추출할떄 사용 method
  const chunks = queryString.split('&');
  return chunks
    .map(chunk => chunk.split('='))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value,
      }),
      {},
    );
}
export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_LOCATION) {
    //  주소 동기화 액션이라면
    const { pathname, search } = payload.location;
    if (pathname === '/') {
      //메인페이지에서만 검색 목록을 포함하므로 경로가 일치 할떄만 작동
      store.dispatch(setFilter(parse(search)));
    }
  }
  return result;
};

// 스토어 설정파일에 추가하기
