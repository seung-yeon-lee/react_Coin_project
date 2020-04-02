import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { setLoading } from './actions/loadingAction';
import { setUser } from './actions/userAction';

class ReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(setUser({ title: 'react', Tech: 'Redux' }));
  }
  render() {
    return <Provider store={this.store}>Redux Example</Provider>;
  }
}
export default ReduxApp;
