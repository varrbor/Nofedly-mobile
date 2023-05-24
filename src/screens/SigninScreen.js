import React from 'react';
import {
  Text,
} from 'react-native';
import { useMutation, gql } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';
import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
mutation signIn($email: String, $password: String!) {
  signIn(email: $email, password: $password)
}
`;

function SignIn({ navigation }) {
  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      navigation.navigate('TabNavigator'),
    );
  };

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      storeToken(data.signIn);
    },
  });
  if (loading) return <Loading />;
  return (
    <>
      {error && <Text>Error signing in!</Text>}
      <UserForm
        action={signIn}
        formType="signIn"
        navigation={navigation}
      />
    </>
  );
}
SignIn.navigationOptions = {
  title: 'Sign In',
};
export default SignIn;
