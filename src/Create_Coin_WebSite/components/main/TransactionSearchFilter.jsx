// FormProvider 컴포넌트로 사용자의 입력값을 받음, 입력된 값은 onSubmit 콜백함수 인자
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import InlineList from '../../InlineList';
import Button from '../../Button';
import Text from '../../Text';
import Input from '../../Input';
import Form from '../../Form';
import Select, { Option } from '../../Select';
import Api from '../../Api';

//onSubmit 프로퍼티로 전달 받은 콜백은 Form 컴포넌트에서 전달받은 HandleSubmit 콜백함수,
// handleSubmit 콜백의 인자로 전달한 valuse의 구조는 params에 넘겨 줄 값의 구조와 같음

class TransactionSearchFilter extends PureComponent {
  //Form 컴포넌트에서 Submit 이벤트가 발생하면 handleSubmit 호출, 이어서 setTransactionList()액션 함수가 호출
  handleSubmit = params => {
    const { setTransactionList } = this.props;
    Api.get('/transaction', { params }).then(({ data }) => setTransactionList(data));
    //redux store data 변경
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
                <Option label="코인원(COINONE)" value="COIN" />
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
  setTransactionList: propTypes.func,
};
export default TransactionSearchFilter;
