import React from 'react';
  import { Text, View, Button } from 'react-native';
  const FeedScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed</Text>
        <Button
          title="Go to StackScreen"
          onPress={() => navigation.navigate('Stack')}
        />
      </View> );
  };
  export default FeedScreen;
