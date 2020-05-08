// 생성 로딩 상태를 표시하기 위해 로딩 셀렉터 추가, 스토어 설정파일에
// 입력한 users와 동일한 이름을 셀렉터 생성 함수에 전달

import createSelectors from '../api-redux-pack/createSelectors';

export const { createLoadingStateSelector: userCreateLoadingStateSelector } = createSelectors(
  'users',
);

//  => registerPage Component 생성
