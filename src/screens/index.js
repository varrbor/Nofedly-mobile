import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './feed'
import Favorites from './favorites';
import MyNotes from './mynotes';
import StackScreen from './StackScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = { headerShown: false, tabBarActiveTintColor: '#309975', tabBarInactiveTintColor: '#454d66', tabBarStyle: {}, }

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
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="Feed"  
            options={{
              tabBarLabel: "Feed",
              tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home" size={24} color={tintColor} />
              ),
              }}  
              component={FeedStack}  />
          <Tab.Screen 
            name="Favorites" 
            options={{
            tabBarLabel: "My Notes",
            tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
            ),
            }}  
            component={FavoritesStack}  />
          <Tab.Screen 
            name="MyNotes"
            options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name="star" size={24} color={tintColor} />
            ),
            }}   
            component={MyNotesStack}  />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
