//usename, entity  props를 받아 출력
// 화면만 담당하는 Component
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PresentationComponent extends PureComponent {
  render() {
    const { userName, entity, title } = this.props;
    return (
      <div>
        이름: {userName}
        <br />
        선택된 항목: {entity && `name: ${entity.name}, age: ${entity.age}`}
      </div>
    );
  }
}
PresentationComponent.propTypes = {
  userName: PropTypes.string,
  entity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default PresentationComponent;
