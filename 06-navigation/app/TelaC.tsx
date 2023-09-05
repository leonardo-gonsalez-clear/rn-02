import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { useLocalSearchParams, useRouter } from 'expo-router'

const TelaC = () => {
  const router = useRouter()
  const { num } = useLocalSearchParams()
  console.log(num)

  return (
    <View style={{ flex: 1 }}>
      <TextoCentral color='#0f0'>TELA C = {num}</TextoCentral>
      <Button title='Avançar' onPress={() => {
        router.push({ pathname: "/TelaC", params: { num: String(Math.random() * 100) } })
      }} />
      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  )
}

export default TelaC

const styles = StyleSheet.create({})
