import React from 'react';
  import { Text, View } from 'react-native';
  const StackScreen = ({ route }) => {
    const { id } = route.params;

    return (
      <View style={{ padding: 10 }}>
        <Text>This is note {id}</Text>
      </View> );
  };
  export default StackScreen;