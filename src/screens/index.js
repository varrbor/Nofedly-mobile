import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './feed'
import Favorites from './favorites';
import MyNotes from './mynotes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="MyNotes" component={MyNotes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}