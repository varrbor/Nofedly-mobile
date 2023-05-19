import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, createSwitchNavigator, createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import FeedScreen from './FeedScreen';
import FavoritesScreen from './FavoritesScreen';
import MyNotesScreen from './MynotesScreen';
import NoteScreen from './NoteScreen';
import AuthLoadingScreen from './AuthloadingScreen';
import SignInScreen from './SigninScreen';
import SettingsScreen from './SettingsScreen';
import Loading from '../components/Loading';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false, tabBarActiveTintColor: '#309975', tabBarInactiveTintColor: '#454d66', tabBarStyle: {},
};

function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={FeedScreen} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true }} name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
}
function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true }} name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
}
function MyNotesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyNotes" component={MyNotesScreen} />
      {/* show header to display a back button in-app */}
      <Stack.Screen options={{ headerShown: true, headerBackVisible: false }} name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerBackVisible: true }} name="SignIn" component={SignInScreen} />
      <Stack.Screen options={{ headerShown: false, title: 'My profile', headerBackTitleVisible: false }} name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
function AuthLoadingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerBackVisible: true }} name="AuthLoadingScreen" component={AuthLoadingScreen} />
      <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="TabNavigator" component={TabNavigator} />
      <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

      <Stack.Screen options={{ headerShown: false, headerBackTitleVisible: false }} name="AuthLoadingStack" component={AuthLoadingStack} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (

    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Feed"
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="home" size={24} color={tintColor} />
          ),
        }}
        component={FeedStack}
      />
      <Tab.Screen
        name="My Notes"
        options={{
          tabBarLabel: 'My Notes',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
          ),
        }}
        component={MyNotesStack}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="star" size={24} color={tintColor} />
          ),
        }}
        component={FavoritesStack}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthLoadingStack />
    </NavigationContainer>
  );
}
