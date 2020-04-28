// 검색 결과 컴포넌트는 스토어와 연결된 하단 정보 컴포넌트로 부터 데이터를 전달받음
// 스토어의 데이터가 변경되면 검색 결과 컴포넌트에도 반영이 됨,
// 앞에서 만든 data 컴포넌트와 연결하면 스토어 변경 가능

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
// import { requestTransactionList } from '../../actions/TransactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
// redux-pack으로 작성한 action import , after => 액션에 대응하는 reducer 수정

export default connect(null, { requestTransactionList })(TransactionSearchFilter);
//앞에서 만든 data 컴포넌트와 연결, 액션만 전달하므로 null
