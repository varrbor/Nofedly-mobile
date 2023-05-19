import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Loading from '../components/Loading';

const AuthLoading = ({ navigation }) => {
  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync('token');

    console.log(777, userToken);

    navigation.navigate(userToken ? 'TabNavigator' : 'AuthStack');
  };
  useEffect(() => {
    checkLoginState();
  });
};

export default AuthLoading;
