import { View, Text, Image, ImageSourcePropType, Dimensions } from 'react-native'
import React from 'react'
import { Container } from './post.styled'
import Author from '../Author/Author'
import Comments from '../Comments/Comments'

interface Props {
  image: ImageSourcePropType
  user: {
    name: string
    avatar: string
  },
  comments: IComment[]
}

const Post = ({ image, user, comments }: Props) => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height * 0.35

  return (
    <Container>
      <Image source={image} resizeMode='contain' style={{ height, width }} />
      <Author avatar={user.avatar} name={user.name} />
      <Comments comments={comments} />
    </Container>
  )
}

export default Post
