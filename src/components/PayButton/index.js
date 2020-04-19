import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container
        colors={focused ? ['#2f7a48', '#055229'] : ['#55E284', '#08B75A']}
        start={[-1, -1]}
      >
        <FontAwesome name="dollar" size={25} color="#fff" />
        <Label>Pagar</Label>
      </Container>
    </TouchableWithoutFeedback>
  );
}
