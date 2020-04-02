// Context로 Modal 만들기
import React, { PureComponent } from 'react';
import withStyles, { css } from '../4.Design/WithStyles';

class Modal extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>{children}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(({ color, unit }) => ({
  overlay: {
    //반투명 배경
    position: 'fixed', //어두운배경 화면 위에 덮어 배치
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%', //전체 배경을 덮기 위해 전체 크기로 설정
    height: '100%',
    backgroundColor: 'rgba(0,0,0, .5)', //어둡게(반투명)
  },
  wrapper: {
    //Modal Box
    verticalAlign: 'middle', // 가운데(수직)
  },
  container: {
    //내용 컨테이너
    margin: '40px auto 0px',
    padding: unit * 4,
    backgroundColor: color.white,
    width: 400,
  },
}))(Modal);
