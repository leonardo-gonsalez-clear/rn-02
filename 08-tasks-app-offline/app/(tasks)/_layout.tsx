import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs >
      <Tabs.Screen name='index' redirect options={{ title: "Tarefas" }} />
      <Tabs.Screen name='TaskList/TaskList' options={{ title: "Tarefas" }} />
    </Tabs>
  )
}

export default _layout
