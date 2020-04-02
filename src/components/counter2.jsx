import React, { Component } from 'react';
import PropTypes from 'prop-types';

class counter2 extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        현재 카운트: {count}
        <button onClick={() => this.props.onAdd()}>카운트증가</button>
      </div>
    );
  }
}

counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default counter2;
