// // 미들웨어로 알림 자동으로 표시, 추가 액션 호출가능함.
// // 미들웨어의 감시기능 활용, ex) SET_ERROR 액션이 실행된 이후, 맞다면 showMessage를 실행 하도록 가능
// SET_ERROR 액션을 미들웨어에서 처리하도록 구성, 이 구성을 통해 추가 액션을 실행

import { SET_ERROR } from '../actions/TransactionActions';
import { showMessage, hideMessage } from '../actions/NotificationActions';
import { debounce } from '../../components/4.Design/debounce';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import { KEY, LIFECYCLE } from 'redux-pack';

const debounceRunner = debounce(action => action(), 3000);

export default store => nextRunner => action => {
  const { type, payload, meta } = action;
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(`${errorMessage} 3초후 사라집니다`, true));
  } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
    // 기존코드는 thunk의 액션타입(set_error)에 반응하도록 작성되서 오류 메시지가 출력 x
    // redux-pack의 오류 액션 추가,  pack은 액션 type과 meta 값을 비교해야 하므로 코드 수정
    // meta[KEY.LIFECYCLE]에 start,success,failure,finish와 같은 비동기 작업 과정 정보가 들어있음
    // 이 값을 LIFECYLCLE 변수와 비교
    const { errorMessage } = payload.response.data || {};
    store.dispatch(showMessage(`${errorMessage} 3초후 자동으로 사라집니다`, true));
    const hide = () => store.dispatch(hideMessage());
    // setTimeout(hide, 3000);
    debounceRunner(hide);
  }
  return nextRunner(action);
};
