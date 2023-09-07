import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()


  return (
    <View>
      <Text>index</Text>
      <Button title="voltar" onPress={() => router.push("/(tasks)")} />
    </View>
  )
}

export default index
