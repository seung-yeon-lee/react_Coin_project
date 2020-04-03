import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionAction01';
import { setAge } from './actions/collectionAction02';
import PresentationComponent from './6.1 화면컴포넌트/PresentationComponent';
import ContainerComponent from './6.2 데이터컴포넌트/ContainerComponent';

class ReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'React', age: 20 },
        { id: 2, name: 'NodeJS', age: 30 },
      ]),
    );

    this.store.dispatch(setAge(1, 10));

    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }
  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 전용 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={1} />
      </Provider>
    );
  }
}

export default ReduxApp;
