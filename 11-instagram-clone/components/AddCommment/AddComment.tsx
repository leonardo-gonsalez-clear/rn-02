import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Octicons } from '@expo/vector-icons'
import { Caption, Container, Input } from './addComment.styled'
import usePostStore from '../../stores/usePostStore'
import useUserStore from '../../stores/useUserStore'

interface Props {
  postId: number
}

const AddComment = ({ postId }: Props) => {
  const [comment, setComment] = React.useState('')
  const [editMode, setEditMode] = React.useState(false)
  const addComment = usePostStore(state => state.addComment)
  const user = useUserStore(state => state.user)

  const handleAddComment = () => {
    if (!comment || !user) return

    addComment({ name: user.name, comment }, postId)
    setComment('')
    setEditMode(false)
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
