import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import useUserStore from '../../stores/useUserStore'
import { BtnLogout, BtnText, Container, Header, Title, User, UserText } from './drawer.styled'
import { Octicons } from '@expo/vector-icons'

interface Props {
  props: DrawerContentComponentProps
}

const Drawer = ({ props }: Props) => {
  const user = useUserStore(state => state.user)
  const logOut = useUserStore(state => state.logOut)

  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
      </Header>
      <User>
        <UserText>{user?.name}</UserText>
        <UserText style={{ fontSize: 14, color: "#555" }}>
          {user?.email}
        </UserText>
      </User>
      <BtnLogout onPress={logOut}>
        <BtnText>
          <Octicons name="sign-out" size={24} color="#212121" />
        </BtnText>
      </BtnLogout>
      <DrawerItemList {...props} />
    </Container>
  )
}

export default Drawer
