// TransactionPagination 컴포넌트(화면)에 전달할 액션과 스토어 데이터 연결
// 페이지정보(pageNumber) 목록요청(requestTransactionList)을 추가

import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = state => {
  const { pagination, ids } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST];
  const { number, size } = pagination;
  return {
    searchParams: state.searchFilter.params, //검색입력 스토어 데이터 연결
    pageNumber: number || 1,
    loading: transactionListLoadingStateSelector(state),
    hasNext: ids.length === size,
    //   // 결과목록의 개수가 페이지 크기와 같을 경우 다음 페이지가 존재한다고 가정
    //   loading,
    // };
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
