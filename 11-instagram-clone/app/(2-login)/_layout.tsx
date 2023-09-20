import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, useRootNavigation } from 'expo-router'
import { Redirect } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: "Login" }} />
      <Stack.Screen name='Registrar' />
    </Stack>
  )
}

export default _layout
