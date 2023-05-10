import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button } from 'react-native';

export default function StackScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome!</Text>
      <Text>This is another screen, inside the home stack</Text>
      <StatusBar style="auto" />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
