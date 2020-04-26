// // 미들웨어로 알림 자동으로 표시, 추가 액션 호출가능함.
// // 미들웨어의 감시기능 활용, ex) SET_ERROR 액션이 실행된 이후, 맞다면 showMessage를 실행 하도록 가능
// SET_ERROR 액션을 미들웨어에서 처리하도록 구성, 이 구성을 통해 추가 액션을 실행

import { SET_ERROR } from '../actions/TransactionActions';
import { showMessage, hideMessage, SHOW_NOTIFICATION } from '../actions/NotificationActions';
import { debounce } from '../../components/4.Design/debounce';

const debounceRunner = debounce(action => action(), 3000);

export default store => nextRunner => action => {
  const { type, payload } = action;
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(`${errorMessage} 3초후 사라집니다`, true));
  } else if (type === SHOW_NOTIFICATION) {
    // show_notification일 경우 숨김 액션 함수를 호출
    const hide = () => store.dispatch(hideMessage());
    // setTimeout(hide, 3000);
    debounceRunner(hide);
  }
  return nextRunner(action);
};
