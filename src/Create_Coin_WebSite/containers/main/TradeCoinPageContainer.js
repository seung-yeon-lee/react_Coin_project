// 데이터 컴포넌트 교체하고 모달 본문 변경하기, tradecoincomponent의 props로
// createTransaction() 액션 함수 전달

import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage01';
// import { createTransaction } from '../../actions/TransactionActions';   //thunk
// rredux-pack 으로 정의한 action import
import { createTransaction } from '../../actions/transactionPackActions';

export default connect(null, { createTransaction })(TradeCoinPage);

// after => ModalProvider 교체
