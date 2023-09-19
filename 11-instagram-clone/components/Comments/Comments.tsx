import { View, Text } from 'react-native'
import React from 'react'
import { Container, Comment, User, CommentText } from './comments.styled'

interface Props {
  comments: IComment[]
}

const Comments = ({ comments }: Props) => {

  if (comments?.length === 0) return null
  return (
    <Container>
      {comments.map((item, index) => (
        <Comment key={index}>
          <User>{item.name}</User>
          <CommentText>{item.comment}</CommentText>
        </Comment>
      ))}
    </Container>
  )
}

export default Comments
