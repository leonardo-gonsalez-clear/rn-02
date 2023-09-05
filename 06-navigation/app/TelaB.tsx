import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { useRouter } from 'expo-router'

const TelaB = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1 }}>
      <TextoCentral color='#00f'>TELA B</TextoCentral>
      <Button title='Avançar' onPress={() => router.push("/TelaC")} />
      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  )
}

export default TelaB

const styles = StyleSheet.create({})
