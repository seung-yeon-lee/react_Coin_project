import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from '../components/05.ContextAPI/Form';
import FormConsumerExample from '../components/05.ContextAPI/FormConsumerExample';
import FormSubmitButton from '../components/05.ContextAPI/FormSubmitButton';

const validate = ({ name, age }) => {
  let errors = {};
  if (!name) errors['name'] = '이름을 입력해야 합니다';
  if (age && age < 18) errors['age'] = '나이는 18세 이상이어야 합니다';
  return errors;
};

storiesOf('Form', module).addWithJSX('유효성 검사', () => (
  <Form validate={validate} onSubmit={action('폼 전송')}>
    <FormConsumerExample name="name" label="이름" />
    <FormConsumerExample name="age" label="나이" />
    <FormConsumerExample name="total" label="금액" />
    <FormSubmitButton>전송</FormSubmitButton>
  </Form>
));
