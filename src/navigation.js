import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Pay from './screens/Pay';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ title: 'Carteira' }}
      />
      <Tab.Screen name="Pay" component={Pay} options={{ title: 'Pagar' }} />

      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}
