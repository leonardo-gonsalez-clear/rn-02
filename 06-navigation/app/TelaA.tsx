import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { useRouter } from 'expo-router'

const TelaA = () => {
  const router = useRouter()



  // router.push("/TelaB")
  return (
    <View style={{ flex: 1 }}>
      <TextoCentral color='#f00'>TELA A</TextoCentral>
      <Button title='Avançar' onPress={() => router.push("/TelaB")} />
    </View>
  )
}

export default TelaA

const styles = StyleSheet.create({})
