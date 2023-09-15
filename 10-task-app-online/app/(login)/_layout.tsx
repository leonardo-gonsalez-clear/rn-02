import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRootNavigation, useRootNavigationState, useRouter } from 'expo-router'
import { Redirect } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const _layout = () => {
  const cond = false
  const rootNav = useRootNavigationState()
  const router = useRouter()

  // if (rootNav?.key && cond) return <Redirect href={"/(tasks)"} />

  const isLoggedIn = async () => {
    const token = await AsyncStorage.getItem("token")

    if (token) return router.push("/(tasks)/")
  }

  React.useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' options={{ title: "Login" }} />
      <Stack.Screen name='SignUp/index' options={{ title: "Registrar" }} />
    </Stack>
  )
}

export default _layout
