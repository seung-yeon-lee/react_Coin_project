// store data와 action을 registerpage 컴포넌트와 연결하기 위한 data Component

import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';
import { createUser } from '../../actions/userActions';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';

// export default connect(
//     { loading: userCreateLoadingStateSelector }, { createUser })(RegisterPage);

export default connect(
  state => ({
    loading: userCreateLoadingStateSelector(state),
  }),
  { createUser },
)(RegisterPage);
// 모달 본문 추가 => constants/modal.js
