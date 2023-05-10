import React from 'react';
  import { Text, View, Button } from 'react-native';
  const NoteScreen = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text>This is a note!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        </View> );
};
  export default NoteScreen;