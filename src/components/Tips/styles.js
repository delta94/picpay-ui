import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 20px;
`;

export const Option = styled.View`
  background-color: ${({ bgColor }) => bgColor};
  width: 140px;
  height: 190px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  width: 85%;
  font-weight: bold;
  line-height: 20px;
`;

export const Img = styled.Image`
  align-self: center;
`;
