// 검색 단어 초기화 위한 reset 컴포넌트 , resetFilter 액션 함수 전달
// 리덕스 스토어가 비어있을 경우 disabled 값을 props으로 전달
import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Button from '../../4.Design/Button';

const mapStateToProps = (state) => {
  //검색 입력값이 없다면 버튼 = disabled를 true로 설정
  const disabled = Object.values(state.searchFilter).reduce(
    (result, value) => result && !value,
    true,
  );
  return {
    disabled,
  };
};
const mapDispatchToProps = {
  onPress: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
