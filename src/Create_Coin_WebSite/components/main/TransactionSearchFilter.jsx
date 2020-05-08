// FormProvider 컴포넌트로 사용자의 입력값을 받음, 입력된 값은 onSubmit 콜백함수 인자
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import InlineList from '../../InlineList';
import Button from '../../Button';
import Text from '../../Text';
import Input from '../../Input';
import Form from '../../Form';
import Select, { Option } from '../../Select';
import { withRouter } from 'react-router-dom';

//onSubmit 프로퍼티로 전달 받은 콜백은 Form 컴포넌트에서 전달받은 HandleSubmit 콜백함수,
// handleSubmit 콜백의 인자로 전달한 valuse의 구조는 params에 넘겨 줄 값의 구조와 같음

class TransactionSearchFilter extends PureComponent {
  //Form 컴포넌트에서 Submit 이벤트가 발생하면 handleSubmit 호출,
  // 이어서 setTransactionList()액션 함수가 호출

  // handleSubmit = params => {
  //   const { requestTransactionList, setFilter } = this.props;
  //   //data compo 에서 연결한 setFilter 함수
  //   const cleanedParams = Object.entries(params)
  //     .filter(([key, value]) => value !== '') //빈값이 아닌 항목 찾기
  //     .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}); //배열을 다시 객체로 변환
  //   requestTransactionList(cleanedParams);
  //   setFilter(cleanedParams);
  // }

  // search.. router 미들웨어 작성 후, 검색 입력 항목을 변경하면 입력값과 동기화x
  // 라우터의 기록함수 history.push를 사용하여 현재 주소 항목을 변경(현재 주소를 인자로 전달된 주소로 변경가능)
  //withRouter 하이어오더 컴포넌트를 사용해 참조
  //search.. 미들웨어에서 requestTransaction 액션을 호출하고 있으므로 삭제
  // 기록함수로 주소가 변경되면 라우터 감지 컴포에서 자동으로 주소 변경 액션 실행 후 미들웨어에서 입력 변경 액션 함수를 호출 하게 될 것임

  handleSubmit = params => {
    // console.log(params);
    const { setFilter, history } = this.props;
    const cleanedParams = Object.entries(params)
      .filter(([key, value]) => value !== '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const queryString = Object.entries(cleanedParams)
      .map(([key, value]) => `${key}=${value}`) // ['code=BTX, 'price = 1000]
      .join('&'); // 'code= BTX&price=100
    history.push(`/?${queryString}`);
  };

  render() {
    const { initValues } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
        {/* Form컴포넌트의 초깃값(initValues)을 프로퍼티에서 전달 받은 값으로 설정 */}
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select name="code" label="코인코드" onChange={onChange} value={values['code']}>
                <Option label="선택해주세요" value="SELECT" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="코인원(COINONE)" value="COINONE" />
              </Select>
              <Input
                name="CurrentPrice_gte"
                label="최소거래가"
                onChange={onChange}
                value={values['currentPrice_gte']}
              />
              <Input
                name="CurrentPrice_lte"
                label="최대거래가"
                onChange={onChange}
                value={values['currentPrice_lte']}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = {
  requestTransactionList: propTypes.func,
  setFilter: propTypes.func,
};
export default withRouter(TransactionSearchFilter);
