import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('UI/Flex', module).addWithJSX('FlexDirection', () => (
  <div>
    <h4>FlexDirection : row</h4>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box3</div>
    </div>
    <h4>FlexDirection : Column</h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
    </div>
  </div>
));
