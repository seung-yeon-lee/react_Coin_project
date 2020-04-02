import React from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../components/Newcount';

storiesOf('NewCounter', module).add('기본설정', () => <NewCounter count={0} />);
