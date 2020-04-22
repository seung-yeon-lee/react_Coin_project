import React from 'react';
import { storiesOf } from '@storybook/react';
import ReduxApp from '../components/06.Redux/ReduxApp01';
import ReduxApp2 from '../components/06.Redux/ReduxApp02';
import AppNav from '../Create_Coin_WebSite/components/AppNav';
storiesOf('Redux', module)
  .addWithJSX('ReduxExample', () => <ReduxApp></ReduxApp>)
  .addWithJSX('그래프DB', () => <ReduxApp2></ReduxApp2>)

  .addWithJSX('nav', () => <AppNav></AppNav>);
