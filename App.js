import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import getEnvVars from './config';

const { API_URI } = getEnvVars();
console.log(API_URI)
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screens from './src/screens';

const cache = new InMemoryCache();
const uri = 'http://localhost:4001/api';

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default function App() {
  
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
