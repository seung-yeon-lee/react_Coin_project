import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../Create_Coin_WebSite/Table';
import TableHead from '../Create_Coin_WebSite/TableHead';
import TableBody from '../Create_Coin_WebSite/TableBody';
import TableRow from '../Create_Coin_WebSite/TableRow';
import TableCell from '../Create_Coin_WebSite/TableCell';

storiesOf('Table/Component', module).addWithJSX('Table 예제', () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="left">코인</TableCell>
        <TableCell align="center">시가 총액</TableCell>
        <TableCell align="center">현재 시세</TableCell>
        <TableCell align="right">거래 시간</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Bitcoin(BTX)</TableCell>
        <TableCell align="center">123,123,900,000원</TableCell>
        <TableCell align="center"> 200,000원</TableCell>
        <TableCell align="right">2020/04/12 17:52:11</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>ethereum(ETH)</TableCell>
        <TableCell align="center">1,239,000,00원</TableCell>
        <TableCell align="center"> 100,000원</TableCell>
        <TableCell align="right">2020/04/12 17:52:11</TableCell>
      </TableRow>
    </TableBody>
  </Table>
));
