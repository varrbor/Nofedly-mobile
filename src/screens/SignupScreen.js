import React from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';
import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
     signUp(email: $email, username: $username, password: $password)
    }
`;
function SignUp({ navigation }) {
  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      navigation.navigate('TabNavigator'),
    );
  };

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      storeToken(data.signUp);
    },
  });

  if (loading) return <Loading />;
  return (
    <>
      {error && <Text>Error signing in!</Text>}
      <UserForm
        action={signUp}
        formType="signUp"
        navigation={navigation}
      />
    </>
  );
}

export default SignUp;
