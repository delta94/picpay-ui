import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styles';

import Header from '../../components/Header';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

export default function Home() {
  return (
    <Container>
      <ScrollView>
        <Header />
        <Suggestions />
        <Activities />
      </ScrollView>
    </Container>
  );
}
