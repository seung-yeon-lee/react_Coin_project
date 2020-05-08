// 주소 동기화 컴포넌트, 리액트 라우터는 주소 변화를 감지,
//  withRouter 하이어 오더 컴포넌트를 사용하면 변경된 주소값 구독 가능,
//  주소가 변경될 떄마다 액션을 호출하여 스토어 데이터를 동기화 되도록 구현

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

class RouterState extends PureComponent {
  //화면 출력 될떄 리덕스 액션함수 setLocation()에 라우터의 location값을 인자로 전달하여 변경
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  componentDidUpdate() {
    // 주소가 바뀌게되어 화면 변경시 호출하여 같은 기능 구현
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);

// 다중 하이어오더 컴포넌트 조합을 이용한 리덕스 액션 호출 함수와 라우터 주소 변경 구독 기능을 구현

// 동작 확인 후 => 검색 필터 미들웨어 추가하기(searchFilterEffects.js)
