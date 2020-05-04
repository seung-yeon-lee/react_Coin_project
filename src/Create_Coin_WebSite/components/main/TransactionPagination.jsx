// 페이지 이동 기능 구현, requrestTransaction 액션 함수에 해당하는 페이지 번호를 전달하도록 구현,

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import InlineList from '../../InlineList';

class TransactionPagination extends PureComponent {
  handleNextPress = () => {
    const { requestTransactionList, pageNumber, searchParams } = this.props; // data 컴포넌트를 만든후 props로 뿌려줄 예정
    requestTransactionList(searchParams, pageNumber + 1);
  };
  handlePrevPress = () => {
    const { requrestTransactionList, pageNumber, searchParams } = this.props;
    requrestTransactionList(searchParams, pageNumber - 1);
  };
  render() {
    const { loading, pageNumber, hasNext } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    // 로딩중 이거나 첫 페이지라면 이전 버튼 작동을 정지
    const nextDisabled = loading || !hasNext;
    //  로딩중 이거나 마지막 페이지인 경우라면 다음 버튼 작동 정지
    return (
      <InlineList align="right">
        <Button secondary disabled={prevDisabled} onPress={this.handlePrevPress}>
          이전
        </Button>
        <Button primary disabled={nextDisabled} onPress={this.handleNextPress}>
          다음
        </Button>
      </InlineList>
    );
  }
}

TransactionPagination.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  requestTransactionList: PropTypes.func.isRequired,
};

export default TransactionPagination;
