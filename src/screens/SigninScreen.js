import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SignIn = props => {

const storeToken = () => {
  SecureStore.setItemAsync('token', 'abc').then(
     props.navigation.navigate('TabNavigator')
  );
};
  return (
    <View>
      <Button title="Sign in!" onPress={storeToken} />
    </View>
); };
SignIn.navigationOptions = {
  title: 'Sign In'
};
export default SignIn;