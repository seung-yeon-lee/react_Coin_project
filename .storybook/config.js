import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss'; //sass webpack 적용 후 scss 불러오기

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/); //require.context()함수로 폴더의 스토리 목록을 가져옴

  context.keys().forEach(srcFile => {
    interopRequireDefault(context(srcFile)); // require()와 동일한 기능, inter ...함수는 = context()함수로 import한 파일중 default 항목을 import함.
  });
}
setAddon(JSXAddon);
configure(loadStories, module);
