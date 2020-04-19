import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <ScrollView>
        <Header />
      </ScrollView>
    </Container>
  );
}
