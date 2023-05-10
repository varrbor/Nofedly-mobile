import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './feed'
import Favorites from './favorites';
import MyNotes from './mynotes';
import StackScreen from './StackScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const  FeedStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Feed" component={Feed} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true, }} name="Stack" component={StackScreen} />
    </Stack.Navigator>
  );
}
const  FavoritesStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Favorites" component={Favorites} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true, }} name="Stack" component={StackScreen} />
    </Stack.Navigator>
  );
}
const  MyNotesStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="MyNotes" component={MyNotes} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true, }} name="Stack" component={StackScreen} />
    </Stack.Navigator>
  );
}
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Feed" component={FeedStack}  />
          <Tab.Screen name="Favorites" component={FavoritesStack}  />
          <Tab.Screen name="MyNotes" component={MyNotesStack}  />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
