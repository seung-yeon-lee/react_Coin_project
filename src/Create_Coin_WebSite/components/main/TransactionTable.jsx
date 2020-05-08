import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import TableCell from '../../TableCell';

import Text from '../../Text';
import Spacing from '../../Spacing';
import WithLoading from '../../../components/02.Hoc/withLoading';
import InlineList from '../../InlineList';
//로딩 화면 표시 하기 위해 import

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <InlineList align="center">
      <Text large>데이터를 불러오고 있습니다</Text>
    </InlineList>
  </Spacing>
);

class TransactionTable extends PureComponent {
  render() {
    const { transaction } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">시가 총액</TableCell>
            <TableCell align="center">현재 시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map(({ id, name, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      currentPrice: PropTypes.number,
      datetime: PropTypes.string,
    }),
  ),
};

export default WithLoading(LoadingMessage)(TransactionTable);
