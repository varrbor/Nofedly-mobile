import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

const GET_MY_NOTES = gql`
  query me {
me { id
      username
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
} }
} }
`;

function MyNotesScreen({ navigation }) {
  const { loading, error, data } = useQuery(GET_MY_NOTES);
  if (loading) return <Loading />;
  if (error) return <Text>Error loading notes</Text>;

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} navigation={navigation} />;
  }
  return <Text>No notes yet</Text>;
}
export default MyNotesScreen;
