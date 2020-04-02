import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('삭제'),
    onUpdate: () => console.warn('업데이트'),
  };
  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <PhoneInfo key={info.id} onRemove={onRemove} info={info} onUpdate={onUpdate} />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
