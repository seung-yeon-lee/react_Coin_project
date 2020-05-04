// 리덕스에 검색 정보 저장, action, reducer 추가 후 화면컴포넌트,데이터컴포넌트를 구성

export const SET_FILTER = 'searchFilter/SET_FILTER';

export function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: { params },
  };
}
