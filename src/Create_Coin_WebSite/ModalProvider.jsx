import createProvider from './Modal/Create';
import { TRADE_COIN_MODAL } from './contants/modals';
import TradeCoinPage from './components/main/TradeCoinPage01';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
