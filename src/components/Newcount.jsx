import React, { Component } from 'react';

class Newcount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    console.log(count);
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
      //App 컴포가 전달한 최초의 프로퍼티값은  state.count에 저장//
    };
  }

  Increment = () => {
    this.setState({
      newCount: this.state.newCount + 1,
    });
  };
  render() {
    return (
      <div>
        Count:{this.state.newCount}
        <button onClick={this.Increment}>Plus</button>
      </div>
    );
  }
}

export default Newcount;
