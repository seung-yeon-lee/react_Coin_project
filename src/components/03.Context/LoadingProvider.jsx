//컴포넌트에서 공급자 분리, pure 사용 x => 공급자 겹쳐서 사용한다면 하위 컴포 동기화x

import React from 'react';
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() {
    // 홈페이지 컴포넌트에 사용된 공급자 데이터항목을 옮김
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return this.props.children; //자식 props 출력
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
