import React from 'react';
import { useQuery, gql } from '@apollo/client';
  import { Text, View, Button } from 'react-native';
  import NoteFeed from '../components/ NoteFeed';
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
  const FeedScreen = props => {
    const { loading, error, data } = useQuery(GET_NOTES);
// Если данные загружаются, наше приложение будет показывать индикатор
// загрузки
if (loading) return <Loading />;
// Если при получении данных произошел сбой, отображаем сообщение об ошибке if (error) return <Text>Error loading notes</Text>;
    // Если запрос выполнен успешно и содержит заметки, возвращаем их в ленту
    return <NoteFeed notes={data.notes} navigation={props.navigation} />;
  };
  export default FeedScreen;
