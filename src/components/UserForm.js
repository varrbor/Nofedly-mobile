import React, { useState } from 'react';
import {
  Button,
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
function UserForm(props) {
  const { action } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    action({
      variables: {
        email,
        password,
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
      <FormLabel>Password</FormLabel>
      <StyledInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry
      />
      <Button title="Log In" onPress={handleSubmit} />
    </FormView>
  );
}
export default UserForm;
