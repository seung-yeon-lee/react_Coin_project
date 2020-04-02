import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/4.Design/Button';

storiesOf('Button', module)
  .addWithJSX('basic', () => <Button>Submit</Button>)
  .addWithJSX('small', () => <Button small>Small Submit</Button>)
  .addWithJSX('large', () => <Button large>large Submit</Button>)
  .addWithJSX('primary', () => <Button primary>primary Submit</Button>)
  .addWithJSX('large+..pri', () => (
    <Button large primary>
      MIX Ver
    </Button>
  ));
