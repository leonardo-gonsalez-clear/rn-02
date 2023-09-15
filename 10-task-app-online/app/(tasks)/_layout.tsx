import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Drawer } from "expo-router/drawer"


const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: "Hoje" }} />
    </Tabs>
  )
}

export default _layout
