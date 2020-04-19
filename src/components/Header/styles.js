import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  padding: 14px 16px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  position: absolute;
  left: 44.5%;
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;

export const Balance = styled.Text`
  font-size: 19px;
  font-weight: 700;
  line-height: 21px;
`;

export const LeftIcons = styled.View`
  flex-direction: row;
  width: 66px;
  justify-content: space-between;
`;
