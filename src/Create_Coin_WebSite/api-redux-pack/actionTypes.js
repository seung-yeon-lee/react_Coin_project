//axois 호출 작업 모듈화, 거래정보에 대한 데이터만 처리하도록 만들었지만 서버에는 언제든 새로운 종류의 데이터가 저장될 수 있음
// 리덕스로 처리하려면 액션,리듀서,셀렉트,리셀렉트 등 작성해야함 axios 호출 작업을 모듈화하여 회원정보에 대한 로딩상태와 알림 표시를 처리하도록 구현예정

//액션 모듈화(목록읽기,읽기,수정,초기화에 대한 action type을 구현)

export const FETCH_LIST = 'api-redux-pack/FETCH_LIST'; //목록전체
export const FETCH = 'api-redux-pack/FETCH'; // 목록읽기
export const UPDATE = 'api-redux-pack/UPDATE'; // 수정
export const CREATE = 'api-redux-pack/CREATE'; // 생성
export const RESET = 'api-redux-pack/RESET'; // 초기화
