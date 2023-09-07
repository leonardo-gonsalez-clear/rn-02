import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRootNavigation, useRootNavigationState, useRouter } from 'expo-router'
import { Redirect } from 'expo-router'

const _layout = () => {
  const cond = true
  const rootNav = useRootNavigationState()
  const router = useRouter()



  if (rootNav?.key && cond) return <Redirect href={"/(tasks)"} />

  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: "Login" }} />
    </Stack>
  )
}

export default _layout
