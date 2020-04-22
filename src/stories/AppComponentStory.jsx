import React from 'react';
import { storiesOf } from '@storybook/react';
import AppLayOut from '../Create_Coin_WebSite/components/AppLayout';
import AppNav from '../Create_Coin_WebSite/components/AppNav';
import Coin from '../Create_Coin_WebSite/Card';

storiesOf('nav', module).addWithJSX('nav', () => <Coin></Coin>);
