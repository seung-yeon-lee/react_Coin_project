//Data Component 작성

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
// import { requestTransactionList } from '../../actions/TransactionActions';
// redux-thunk

import { requestTransactionList } from '../../actions/transactionPackActions';
// redux-pack으로 작성한 action import after: serchFilter data컴포넌트도 변경

const mapStateToProps = state => {
  // mapStateToProps가 반환하는 객체에  loading 출력,
  const { ids, entities, loading } = state.transactions;
  const transactions = ids.map(id => entities[id]);
  return { transactions, loading };
};
const mapDispatchToProps = {
  requestTransactionList,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
