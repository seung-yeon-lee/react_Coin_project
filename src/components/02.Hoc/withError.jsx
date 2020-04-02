//필수 입력 항목 표시 기능 추가, HOC
import React from 'react';
import withStyles, { css } from '../4.Design/WithStyles';

export default function(defaultMessage) {
  //오류 메시지를 커링 함수의 인자로 전달
  return WrappedComponent => {
    const { displayName, name: component } = WrappedComponent;
    const wrappedComponentName = displayName || component; //컴포넌트 이름 표시

    function ComponentWithError({
      //!! return > Wrap..이 여기 안에 들어오는건가?
      //반환되는 확장 컴포넌트를 함수형으로
      hasError,
      errorMessage,
      styles,
      ...props
    }) {
      return (
        <>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
          {/* 오류 메시지를 withStyles로 꾸민다음  hasError가 true라면 출력 */}
        </>
      );
    }

    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    };
    ComponentWithError.displayName = `WithError(${wrappedComponentName})`; //display네임 정의
    return withStyles(({ color }) => ({
      // 스타일을 => 스타일 컴포넌트 생성 함수로 정의
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
