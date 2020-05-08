import createProvider from './Modal/Create';
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from './contants/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';
import RegisterPage from './components/signup/RegisterPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
  [REGISTER_USER_MODAL]: RegisterPage,
  // 회원가입 버튼 추가하기 => AppNav.jsx
});
