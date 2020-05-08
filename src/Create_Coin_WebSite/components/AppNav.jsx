import React, { PureComponent } from 'react';
import { withStyles, css, withStylesPropTypes } from '../withStyles';
import Heading from '../Heading';
import Text from '../Text';
import Button from '../Button';
import { REGISTER_USER_MODAL } from '../contants/modals';

import { Consumer as Modal } from '../Modal/context';

export const HEIGHT = 64;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <Heading level={3} inverse>
            Coin Exchange Site
          </Heading>
          <Modal>
            {({ openModal }) => (
              <Button inverse bold large onPress={() => openModal(REGISTER_USER_MODAL)}>
                회원가입
              </Button>
            )}
          </Modal>
        </div>
      </div>
    );
  }
}
AppNav.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => ({
  wrapper: {
    ...depth.level1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    width: '100%',
    height: HEIGHT - 4,
    backgroundColor: color.primary,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unit * 2,
    paddingRight: unit * 2,
  },
}))(AppNav);
