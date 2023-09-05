import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { useRouter } from 'expo-router'

const TelaC = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1 }}>
      <TextoCentral color='#0f0'>TELA C</TextoCentral>
      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  )
}

export default TelaC

const styles = StyleSheet.create({})
