import React from 'react';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';

import {
  HeaderContainer,
  BalanceContainer,
  BalanceTitle,
  Balance,
  LeftIcons,
} from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <MaterialCommunityIcons name="qrcode-scan" size={28} color="#10c86c" />

      <BalanceContainer>
        <BalanceTitle>Meu saldo</BalanceTitle>
        <Balance>R$ 0,00</Balance>
      </BalanceContainer>

      <LeftIcons>
        <AntDesign name="gift" size={28} color="#10c86c" />
        <Feather name="percent" size={28} color="#10c86c" />
      </LeftIcons>
    </HeaderContainer>
  );
}
