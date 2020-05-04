// 데이터 컴포넌트 교체하고 모달 본문 변경하기, tradecoincomponent의 props로
// createTransaction() 액션 함수 전달

import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage01';
// import { createTransaction } from '../../actions/TransactionActions';   //thunk
// rredux-pack 으로 정의한 action import
import { createTransaction, CREATE_TRANSACTION } from '../../actions/transactionPackActions';
//거래 요청 로딩 상태 추가 코드
//생성 과정인 CREATE...을 참조하여 loading 프로퍼티에 전달하도록 mapState..추가

const mapStateToProps = state => {
  const { loadingState } = state.transactions;
  const loading = loadingState[CREATE_TRANSACTION];
  return { loading };
}; // 화면 컴포넌트에 로딩 상태 추가 하기

export default connect(mapStateToProps, { createTransaction })(TradeCoinPage);

// after => ModalProvider 교체
