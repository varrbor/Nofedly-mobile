import {
  ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from '@apollo/client';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { setContext } from 'apollo-link-context';
import getEnvVars from './config';
import Screens from './src/screens';

const { API_URI } = getEnvVars();
console.log(API_URI);

const cache = new InMemoryCache();
const uri = 'http://localhost:4001/api';

const httpLink = createHttpLink({ uri });

const authLink = setContext(async (_, { headers }) => ({
  headers: {
    ...headers,
    authorization: (await SecureStore.getItemAsync('token')) || '',
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
}
