import React from 'react';
import { useQuery, gql } from '@apollo/client';
  import { Text, View } from 'react-native';
  import Note from '../components/Note';
  import Loading from '../components/Loading';


  const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
} }
} `;
  
 const NoteScreen = ({ route }) => {
    const { id } = route.params;

   const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
   if (loading) return <Loading />;
    // В случае сбоя выдаем пользователю сообщение об ошибке
    if (error) return <Text>Error! Note not found</Text>;
    // В случае успеха передаем данные в компонент note
    return <Note note={data.note} />;
  };
  export default NoteScreen;