import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  background-color: #6882bb;
  margin: 20px 16px;
  height: 160px;
  border-radius: 8px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  /* width: 200px; */
  margin-top: 15px;
  line-height: 22px;
`;

export const Img = styled.Image`
  margin-left: 20px;
`;
