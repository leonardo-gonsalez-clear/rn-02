import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router/src/useNavigation'

const TelaC = () => {
  const router = useRouter()
  const nav = useNavigation()
  const { num } = useLocalSearchParams()
  console.log(num)

  return (
    <View style={{ flex: 1 }}>
      <TextoCentral color='#0f0'>TELA C = {num}</TextoCentral>
      <Button title='Abrir drawer' onPress={() => nav.dispatch(DrawerActions.openDrawer())} />
      <Button title='Avançar' onPress={() => {
        router.push({ pathname: "/TelaC", params: { num: String(Math.random() * 100) } })
      }} />
      <Button title='Voltar' onPress={() => router.back()} />
    </View>
  )
}

export default TelaC

const styles = StyleSheet.create({})
