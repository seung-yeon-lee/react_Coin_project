// searchInput , Data Component 작성

import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../../4.Design/InputWithStyle';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || '';

  // props.name에는 검색 항목 키가 전달, searchFilter는 검색 항목 객체
  // state.searchFilter[props.name]은 해당 검색 항목의 입력 값
  return {
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
