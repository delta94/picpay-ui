import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Pay from './screens/Pay';

const { height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'home',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,.2',
          height: height * 0.095,
          paddingBottom: 5,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#696969',
      }}
    >
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
