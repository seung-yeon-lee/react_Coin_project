//버튼 추가하여 화면컴포넌트, 리덕스와 연관이없으므로 \

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../4.Design/Button';

class ActionComponent1 extends PureComponent {
  render() {
    const { setAge, setUser, setCollection, setLoading } = this.props;
    const collection = [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Park', age: 40 },
      { id: 3, name: 'Lee', age: 10 },
    ];
    return (
      <>
        <Button onPress={() => setLoading(true)}>SetLoading</Button>
        <Button onPress={() => setCollection(collection)}>SetCollection</Button>
        <Button onPress={() => setUser({ name: 'Choi', age: 20 })}>SetUser</Button>
        <Button onPress={() => setAge(1, 55)}>SetAge</Button>
      </>
    );
  }
}

ActionComponent1.propTypes = {
  setAge: PropTypes.func,
  setUser: PropTypes.func,
  setCollection: PropTypes.func,
  setLoading: PropTypes.func,
};

export default ActionComponent1;
