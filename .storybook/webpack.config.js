// sass-loader 설정  react webpack과 설정이 다르기 떄문에 따로 설정

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/, // scss 확장자 파일만 적용하도록
        loaders: ['sass-loader'], //sass-loader로 sass 구문을 css로 변환
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};

//next => config.js에서 materialize.scss import
