import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
`;

export const Header = styled.View`
  height: 50px;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Card = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  elevation: 1;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
`;

export const Description = styled.Text`
  margin-left: 15px;
  font-size: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin: 14px 0;
`;

export const Text = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  margin-top: 6px;
`;

export const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
`;

export const Date = styled.Text`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const OptionLabel = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
`;
