// 회원가입 액션을 묶음 함수로 추가한 코드 알림 표시 미들웨어 사용으로 인해 notification 항목을
// 추가한 것만으로 쉽게 출력가능, 화면 컴포넌트에는 onComplete 콜백 함수를 인자로 전달하여
// 회원가입이 끝나면 모달이 자동으로 닫힐 수 있도록 구현

import createActions from '../api-redux-pack/createAction';

const { create } = createActions('users');
export function createUser(data, onComplete) {
  return create(
    data,
    {},
    {
      notification: { success: '회원가입이 완료되었습니다' },
      onSuccess: onComplete,
    },
  );
}

// 회원가입 action 생성 => reducer 추가(index.js에 createReducer함수의 2번째 인자에 users 추가)
