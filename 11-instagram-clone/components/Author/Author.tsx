import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Container, Name } from './author.styled'

interface Props {
  name: string
  avatar: string
}

const Author = ({ name, avatar }: Props) => {
  const anonAvatar = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
  return (
    <Container>
      <Avatar
        source={{ uri: avatar || anonAvatar }}
        style={{ borderColor: "#2223", borderWidth: 1 }} />
      <Name>{name}</Name>
    </Container>
  )
}

export default Author
