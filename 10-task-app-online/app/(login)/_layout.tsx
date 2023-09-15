import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRootNavigation, useRootNavigationState, useRouter } from 'expo-router'
import { Redirect } from 'expo-router'

const _layout = () => {
  const cond = false
  const rootNav = useRootNavigationState()
  const router = useRouter()



  if (rootNav?.key && cond) return <Redirect href={"/(tasks)"} />

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' options={{ title: "Login" }} />
      <Stack.Screen name='SignUp/index' options={{ title: "Registrar" }} />
    </Stack>
  )
}

export default _layout
