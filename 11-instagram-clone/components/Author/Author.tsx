import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Container, Name } from './author.styled'

interface Props {
  name: string
  avatar: string
}

const Author = ({ name, avatar }: Props) => {
  return (
    <Container>
      <Avatar
        source={{ uri: avatar }}
        style={{ borderColor: "#2223", borderWidth: 1 }} />
      <Name>{name}</Name>
    </Container>
  )
}

export default Author
