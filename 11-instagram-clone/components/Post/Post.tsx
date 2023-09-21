import { View, Text, Image, ImageSourcePropType, Dimensions } from 'react-native'
import React from 'react'
import { Container } from './post.styled'
import Author from '../Author/Author'
import Comments from '../Comments/Comments'
import AddComment from '../AddCommment/AddComment'


const Post = ({ image, comments, email, name, avatarUrl }: IPost) => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height * 0.35

  return (
    <Container>
      <Image source={image} resizeMode='cover' style={{ height, width }} />
      <Author avatar={avatarUrl} name={name} />
      <Comments comments={comments || []} />
      <AddComment />
    </Container>
  )
}

export default Post
