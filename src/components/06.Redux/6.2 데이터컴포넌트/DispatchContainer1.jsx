//Data 컴포넌트 작성

import { connect } from 'react-redux';
import ActionComponent from '../6.1 화면컴포넌트/ActionComponent1';

import { setAge } from '../actions/collectionAction02';
import { setCollection } from '../actions/collectionAction01';
import { setUser } from '../actions/userAction';
import { setLoading } from '../actions/loadingAction';

const mapDispatchToProps = {
  setAge,
  setUser,
  setLoading,
  setCollection,
};
export default connect(null, mapDispatchToProps)(ActionComponent);

//connect 함수는 mapDispatchToProps() 함수가 반환하는 객체를
// 재활용 컴포넌트(ActionComponent)의 프로퍼티로 전달
