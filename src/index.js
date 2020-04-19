import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
