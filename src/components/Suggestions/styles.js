import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
  showsHorizontalScrollIndicator: false,
}))`
  background-color: #11c770;
  height: 150px;
`;

export const Option = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  margin-right: 16px;
  width: 70px;
  align-items: center;
`;

export const Img = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 40px;
  border: 2px solid white;
`;

export const Label = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin-top: 4px;
`;
