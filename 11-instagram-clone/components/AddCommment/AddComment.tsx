import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Octicons } from '@expo/vector-icons'
import { Caption, Container, Input } from './addComment.styled'

const AddComment = () => {
  const [comment, setComment] = React.useState('')
  const [editMode, setEditMode] = React.useState(false)

  const handleAddComment = () => {

  }

  if (editMode) return (
    <Container>
      <Input
        placeholder='comentar...'
        value={comment}
        onChangeText={setComment}
        onSubmitEditing={handleAddComment}
      />
      <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
        <Octicons name='x' size={15} color={"#555"} />
      </TouchableWithoutFeedback>
    </Container>
  )
  return (
    <TouchableWithoutFeedback onPress={() => setEditMode(true)}>
      <Container>
        <Octicons name='comment' size={25} color="#555" />
        <Caption>
          Adicione um comentário
        </Caption>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default AddComment
