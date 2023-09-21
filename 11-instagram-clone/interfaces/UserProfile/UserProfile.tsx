import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, Container, Email, LogOut, LogOutText, Name } from './userProfile.styled'
import useUserStore from '../../stores/useUserStore'

const user = {
  email: "leonardo@gmail.com",
  secure: true,
  avatarUrl: "https://img.freepik.com/fotos-gratis/view-of-adorable-kitten-with-simple-background_23-2150758084.jpg?t=st=1695133228~exp=1695133828~hmac=fc36475e2d4a74fa383c3fa7bc438ce3ef896ecdf5ab0f78a16adf45cbae2734"
}

const UserProfile = () => {
  const logOut = useUserStore(state => state.logout)
  const user = useUserStore(state => state.user)

  if (!user) return null
  return (
    <Container>
      <Avatar source={{ uri: user?.avatarUrl }} />
      <Name>{user?.name}</Name>
      <Email>{user?.email}</Email>

      <LogOut onPress={logOut}>
        <LogOutText>Sair</LogOutText>
      </LogOut>
    </Container>
  )
}

export default UserProfile
