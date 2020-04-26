// data component ( errorMessage, Notification Component 연결)
import { connect } from 'react-redux';
import Notification from './Notification';

const mapStateToProps = state => {
  const { hasError, errorMessage } = state.transactions;
  return { hasError, errorMessage };
};
export default connect(mapStateToProps)(Notification);

// 기존 store에 있는 transaction에서 오류 따로 정리한 data 컴포넌트로 바꿈
