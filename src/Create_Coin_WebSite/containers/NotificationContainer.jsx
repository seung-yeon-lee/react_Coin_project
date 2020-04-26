// Notificaton 관련 action => reducer => reducer 합치기 후 데이터 컴포넌트

import { connect } from 'react-redux';
import Notification from '../components/main/Notification';

const mapStateToProps = state => {
  // store에 transaction이 아니라 따로 구분, notification으로 알림과 관련이 있는
  // 데이터일 경우에만 참조하도록
  const { showMessage, message, warning } = state.notification;
  return {
    showMessage, //initState 안
    message,
    warning,
  };
};
export default connect(mapStateToProps)(Notification);
