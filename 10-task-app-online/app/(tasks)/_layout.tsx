import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { Drawer } from "expo-router/drawer"
import CustomDrawer from "../../interfaces/Drawer/Drawer"
import useUserStore from '../../stores/useUserStore'
import AsyncStorage from '@react-native-async-storage/async-storage'


const _layout = () => {
  const user = useUserStore(state => state.user)
  const router = useRouter()

  React.useEffect(() => {
    const logout = async () => {
      if (!user) {
        await AsyncStorage.removeItem("token")
        router.push("/(login)/")
      }

    }

    logout()
  }, [user])
  return (
    <Drawer drawerContent={(props) => (<CustomDrawer props={props} />)}>
      <Drawer.Screen name='index' options={{ title: "Hoje" }} />
      <Drawer.Screen name='Tomorrow' options={{ title: "Amanhã" }} />
      <Drawer.Screen name='Week' options={{ title: "Semana" }} />
      <Drawer.Screen name='Month' options={{ title: "Mês" }} />
    </Drawer>
  )
}

export default _layout
