import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

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
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

const tabBarOption = {
  style: {
    backgroundColor: '#f8f8f8',
    borderTopColor: 'rgba(0,0,0,.2)',
    height: height * 0.095,
    paddingBottom: 5,
  },
  activeTintColor: '#0B6651',
  inactiveTintColor: '#91A29A',
};

function configScreenOption({ route, navigation }) {
  return {
    tabBarIcon: ({ color, size, focused }) => {
      if (route.name === 'Pay')
        return (
          <PayButton
            onPress={() => navigation.navigate('Pay')}
            focused={focused}
          />
        );

      const { lib: Icon, name } = icons[route.name];
      return <Icon name={name} size={size} color={color} />;
    },
  };
}

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={configScreenOption}
      tabBarOptions={tabBarOption}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Início' }} />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ title: 'Carteira' }}
      />

      <Tab.Screen name="Pay" component={Pay} options={{ title: '' }} />

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
