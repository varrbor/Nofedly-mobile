import React from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

function SettingsScreen({ navigation }) {
  const signOut = (props) => {
    SecureStore.deleteItemAsync('token').then(
      navigation.navigate('AuthLoadingStack'),
    );
  };
  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

export default SettingsScreen;
