import React, { Component } from 'react';

class conter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count, //count의 초깃값은 프로퍼티에서 전달된 값으로 설정
    };
  }
  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.Increment}>Plus</button>
      </div>
    );
  }
}

export default conter;
