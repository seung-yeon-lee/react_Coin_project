import createProvider from './Modal/Create';
import { TRADE_COIN_MODAL } from './contants/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
