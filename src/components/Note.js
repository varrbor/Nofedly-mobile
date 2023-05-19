import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const NoteView = styled.ScrollView`
    padding: 10px;
  `;
function Note(props) {
  return (
    <NoteView>
      <Text>{props.note.content}</Text>
    </NoteView>
  );
}
export default Note;
