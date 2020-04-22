//앞에 과정을 Card 컴포넌트에 담아 배치,
import React, { PureComponent } from 'react';
import Heading from '../../Heading';
import Card from '../../Card';
import Api from '../../Api';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  componentDidMount() {
    Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
    //Api.get으로 데이터를 받아온 후 , set..액션함수를 이용하여 스토어 데이터 변경
  }
  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transaction={transactions} />
        </Card>
      </div>
    );
  }
}
TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
