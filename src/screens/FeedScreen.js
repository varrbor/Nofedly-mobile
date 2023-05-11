import React from 'react';
  import { Text, View, Button } from 'react-native';
  import NoteFeed from '../components/ NoteFeed';

  const FeedScreen = props => {
    return <NoteFeed navigation={props.navigation} />;
  };
  export default FeedScreen;
