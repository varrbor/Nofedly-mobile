import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import React from 'react';
import getEnvVars from './config';
import Screens from './src/screens';

const { API_URI } = getEnvVars();
console.log(API_URI);

const cache = new InMemoryCache();
const uri = 'http://localhost:4001/api';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
}
