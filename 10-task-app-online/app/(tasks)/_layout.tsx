import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Drawer } from "expo-router/drawer"
import CustomDrawer from "../../interfaces/Drawer/Drawer"


const _layout = () => {
  return (
    <Drawer drawerContent={(content) => (<CustomDrawer content={content} />)}>
      <Drawer.Screen name='index' options={{ title: "Hoje" }} />
      <Drawer.Screen name='Tomorrow' options={{ title: "Amanhã" }} />
      <Drawer.Screen name='Week' options={{ title: "Semana" }} />
      <Drawer.Screen name='Month' options={{ title: "Mês" }} />
    </Drawer>
  )
}

export default _layout
