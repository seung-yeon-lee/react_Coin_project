import { Component } from 'react';

export default class Rcc extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }
  componentDidMount() {
    console.log('componentDidMount 호출');
    this.forceUpdate();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }
  componentWillUnmount() {
    console.log('componentWillUnMount 호출');
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdata 호출');
    return false;
  }
  render() {
    console.log('render 호출');
    return null;
  }
}
