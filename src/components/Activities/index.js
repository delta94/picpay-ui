import React from 'react';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Text,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou <Bold>@youssef-md</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Text>Rachando a pizza!!</Text>
          <Text>Este pagamento rendeu cashback</Text>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 8,50</Value>
            <Divider />
            <Ionicons name="ios-people" size={20} color="rgba(0,0,0,0.5)" />
            <Date>1 mês atrás</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={21}
                color="rgba(0,0,0,0.5)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={21} color="rgba(0,0,0,0.5)" />
              <OptionLabel>5</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
