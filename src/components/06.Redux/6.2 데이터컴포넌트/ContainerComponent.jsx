// connect() 함수로 data component 생성
//Data만 담당하는 Component
import { connect } from 'react-redux';
import PresentationComponent from '../6.1 화면컴포넌트/PresentationComponent';

const mapStateProps = (state, props) => {
  //mapStateProps = data 컴포넌트에서 필요한 데이터를 스토어에서 추출하여 객체를 반환하는 역할
  return {
    userName: state.user.name, //store에 접근하여 변환
    entity: state.collection.entities[props.id],

    //Data 컴포넌트에 props로 전달된 id 값을 참조하여 그래프 DB의 자료 추출
  };
};
export default connect(mapStateProps)(PresentationComponent);
