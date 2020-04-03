//버튼 추가하여 화면컴포넌트, 리덕스와 연관이없으므로 \

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../4.Design/Button';

class ActionComponent1 extends PureComponent {
  render() {
    const { setAge } = this.props;
    // setAge() 프로퍼티로 전달된 콜백함수를 호출하도록 구현,
    return (
      <>
        <Button onPress={() => setAge(1, 77)}>Id값이 1번인 대상 age를 77로 변경</Button>
      </>
    );
  }
}

ActionComponent1.propTypes = {
  setAge: PropTypes.func,
};

export default ActionComponent1;

// //id age 수정
// export const SET_AGE = 'set_age';

// export const setAge = (id, age) => ({
//   type: SET_AGE,
//   payload: { id, age },
// });
