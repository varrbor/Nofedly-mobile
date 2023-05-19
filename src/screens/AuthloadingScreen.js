import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Loading from '../components/Loading';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AuthLoading = ({ navigation }) => {

  const checkLoginState = async () => {
    // Извлекаем значение токена
    const userToken = await SecureStore.getItemAsync('token');

    console.log(777, userToken)
    // Если токен найден, переходим на экран приложения
    // В противном случае переходим на экран авторизации
    navigation.navigate(userToken ? 'TabNavigator' : 'AuthStack');
  };
  // Вызываем checkLoginState, как только компонент установится
  useEffect(() => {
    checkLoginState();
})}

export default AuthLoading;