import React from 'react';
import { storiesOf } from '@storybook/react';
import ReduxApp from '../components/06.Redux/ReduxApp01';

storiesOf('Redux', module).addWithJSX('ReduxExample', () => <ReduxApp></ReduxApp>);
