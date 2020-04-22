//Data Component 작성

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { setTransactionList } from '../../actions/TransactionActions';

const mapStateToProps = state => {
  const { ids, entities } = state.transactions;
  const transactions = ids.map(id => entities[id]);
  return { transactions };
};
const mapDispatchToProps = {
  setTransactionList,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
