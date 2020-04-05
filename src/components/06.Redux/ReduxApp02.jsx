import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionAction01';
import { setAge } from './actions/collectionAction02';
import PresentationComponent from './6.1 화면컴포넌트/PresentationComponent';
import ContainerComponent from './6.2 데이터컴포넌트/ContainerComponent';
import DispatchContainer01 from '../06.Redux/6.2 데이터컴포넌트/DispatchContainer1';
import SearchFilterInputContainer from './6.2 데이터컴포넌트/searchFilterInputContainer';
import SearchFilterButtonContainer from './6.2 데이터컴포넌트/searchResetButtonContainer';
import SearchResultTabelContainer from './6.2 데이터컴포넌트/SearchResultTableContainer';
import Inputs from '../4.Design/InputWithStyle';
import searchFilterInputContainer from './6.2 데이터컴포넌트/searchFilterInputContainer';
class ReduxApp extends PureComponent {
  store = configureStore({});

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
    const originalPayload = ids.map((id) => entities[id]);
    console.log(originalPayload);
  }
  render() {
    return (
      <Provider store={this.store}>
        Redux Example Code
        <fieldset>
          <SearchFilterInputContainer type="number" name="id" label="아이디 검색" />
          <SearchFilterInputContainer type="text" name="name" label="이름 검색" />
          <SearchFilterInputContainer type="number" name="age" label="나이 검색" />

          <SearchFilterButtonContainer>리셋</SearchFilterButtonContainer>
        </fieldset>
        <SearchResultTabelContainer />
        화면 컴포넌트: <PresentationComponent userName="화면 전용 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={1} />
        <br />
        액션 컴포넌트 <DispatchContainer01 />
      </Provider>
    );
  }
}

export default ReduxApp;
