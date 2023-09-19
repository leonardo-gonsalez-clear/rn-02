import { View, Text, Image, ImageSourcePropType, Dimensions } from 'react-native'
import React from 'react'
import { Container } from './post.styled'

interface Props {
  image: ImageSourcePropType
}

const Post = ({ image }: Props) => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height * 0.35

  return (
    <Container>
      <Text>Post</Text>
      <Image source={image} resizeMode='contain' style={{ height, width }} />
    </Container>
  )
}

export default Post
