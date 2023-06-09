import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Text } from 'react-native';
import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

const GET_NOTES = gql`
  query notes {
  notes { id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
  } }
} `;
function FeedScreen(props) {
  const { navigation } = props;
  const { loading, data } = useQuery(GET_NOTES);

  if (loading) return <Loading />;
  if (data === undefined) return <Text>No Notes yet</Text>;
  return <NoteFeed notes={data.notes && data.notes} navigation={navigation} />;
}
export default FeedScreen;
