import React, { useState } from 'react';
import {
  Button, View, TouchableOpacity, Text,
} from 'react-native';
import styled from 'styled-components/native';

const FormView = styled.View`
  padding: 10px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid gray;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 24px;
`;

const FormLabel = styled.Text`
     font-size: 18px;
    font-weight: bold;
  `;

const FormButton = styled.TouchableOpacity`
  background: #0077cc;
  width: 100%;
  padding: 8px;
`;
const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const SignUp = styled.TouchableOpacity`
    margin-top: 20px;
  `;

const Linkf = styled.Text`

    color: #0077cc;
    font-weight: bold;
  `;
function UserForm(props) {
  const { action, formType } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = () => {
    action({
      variables: {
        email,
        password,
        username,
      },
    });
  };

  return (
    <FormView>
      <FormLabel>Email</FormLabel>
      <StyledInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        textContentType="emailAddress"
        autoCompleteType="email"
        autoFocus
        autoCapitalize="none"
      />
      {formType === 'signUp' && (
      <View>
        <FormLabel>Username</FormLabel>
        <StyledInput
          onChangeText={(text) => setUsername(text)}
          value={username}
          textContentType="username"
          autoCapitalize="none"
        />
      </View>
      )}
      <FormLabel>Password</FormLabel>
      <StyledInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry
      />
      <FormButton title="Log In" onPress={handleSubmit}><ButtonText>Submit</ButtonText></FormButton>
      {formType !== 'signUp' && (
        <SignUp onPress={() => props.navigation.navigate('SignUp')}>
          <Text>Need an account?</Text>
          <Linkf>Sign up.</Linkf>
        </SignUp>
      )}
    </FormView>
  );
}
export default UserForm;
