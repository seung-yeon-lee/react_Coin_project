// 검색 결과 컴포넌트는 스토어와 연결된 하단 정보 컴포넌트로 부터 데이터를 전달받음
// 스토어의 데이터가 변경되면 검색 결과 컴포넌트에도 반영이 됨,
// 앞에서 만든 data 컴포넌트와 연결하면 스토어 변경 가능

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
// import { requestTransactionList } from '../../actions/TransactionActions';
// import { requestTransactionList } from '../../actions/transactionPackActions';
// redux-pack으로 작성한 action import , after => 액션에 대응하는 reducer 수정
// import { setFilter } from '../../actions/searchFilterActions';
// 검색정보 저장을 위해 action => reducer 추가 후 data컴포넌트 action 교체

//미들웨어에서 액션들을 호출해서 감지하므로 기존 코드 수정,

const mapStateToProps = state => ({
  initValues: state.searchFilter.params,
});
export default connect(mapStateToProps)(TransactionSearchFilter);

// 처음 주소창에 입력된 항목값들이 검색 필터 입력 폼에 표시 x
// 현재 데이터 컴포넌트에서 스토어에있는 입력값을 전달 받은 후 그 값을 초깃값으로 지정

// 화면컴포넌트 searchFilter.js를 수정하기 =>
