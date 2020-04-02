import React from 'react';
import PropTypes from 'prop-types';
import Button from '../4.Design/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ children }) {
  return (
    <>
      <Consumer
        children={value => (
          <Button onPress={() => value.setLoading('loading', !value.loading)}>
            {value.loading ? '로딩 중' : children}
          </Button>
        )}
      />
      <Consumer
        children={({ loading = false, loading2 = false }) => (
          <Button>{loading && loading2 ? '로딩중' : children}</Button>
        )}
      />
    </>
  );
}
