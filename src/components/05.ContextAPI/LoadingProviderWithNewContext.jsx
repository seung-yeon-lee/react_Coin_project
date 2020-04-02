// context API
import React from 'react';
const { Provider, Consumer } = React.createContext({}); // 빈 객체를 인자로 전달하여 생성자,소비자 생성

export { Consumer }; // 소비자를 export

export default class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setLoading = (key, value) => {
    //key,value를 인자로 받아 ,key에 해당하는 state값을 저장
    const newState = { [key]: value };
    this.setState({ newState });
  };
  render() {
    const context = {
      ...this.state, // 컨텍스트 data에 state 값과, setLoading을 추가
      setLoading: this.setLoading, // this 제거하고 해보기 //
    };
    return (
      <Provider value={context}>
        {' '}
        {/* 공급자가 공유할 data를 value 프로퍼티로 전달  */}
        {this.props.children} {/*자식 프로퍼티를 출력하여 자식 컴포넌트에 data를 전달 */}
      </Provider>
    );
  }
}
