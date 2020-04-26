//거래 처리 과정의 알림 메시지 미들 웨어 추가
// 거래 요청이 완료 => 자동으로 변경된 거래 목록을 요청, 성공여부 메시지도 함께 출력하도록 미들웨어 구성

import { TRADE_COMPLETE, requestTransactionList } from '../actions/TransactionActions';
import { showMessage } from '../actions/NotificationActions';

export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === TRADE_COMPLETE) {
    const message = '거래 목록이 최신 정보로 업데이트 되었습니다';
    store.dispatch(showMessage(message));
    // 알림 액션 함수를 호출하여 성공 메시지 출력
    store.dispatch(requestTransactionList());
    // request..액션 함수를 호출하여 새로운 거래 목록을 요청
  }
  return result;
};

// after => middleware 추가하기  store파일
