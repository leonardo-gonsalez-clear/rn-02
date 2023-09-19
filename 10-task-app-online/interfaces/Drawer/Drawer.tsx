import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import useUserStore from '../../stores/useUserStore'
import { Container, User, UserText } from './drawer.styled'

interface Props {
  props: DrawerContentComponentProps
}

const Drawer = ({ props }: Props) => {
  const user = useUserStore(state => state.user)

  return (
    <Container>
      <User>
        <UserText>{user?.name}</UserText>
        <UserText style={{ fontSize: 14, color: "#555" }}>{user?.email}</UserText>
      </User>
      <DrawerItemList {...props} />
    </Container>
  )
}

export default Drawer
