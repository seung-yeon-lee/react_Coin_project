//Data Component 작성
import {
  transactionListSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';
// 작성한 셀렉터 import
import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
// import { requestTransactionList } from '../../actions/TransactionActions';
// redux-thunk
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
// redux-pack으로 작성한 action import after: serchFilter data컴포넌트도 변경

const mapStateToProps = state => {
  // // mapStateToProps가 반환하는 객체에  loading 출력,
  // const { ids, entities, loadingState } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST]; //loading값을 참조하던 코드를 정의한 loadingState를 참조하여 로딩상태값 반환
  // const transactions = ids.map(id => entities[id]);
  // return { transactions, loading };
  // 셀렉터 적용 code
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  };
  // paginationContainer 데이터 컴포넌트에도 적용 예정
};
const mapDispatchToProps = {
  requestTransactionList,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
