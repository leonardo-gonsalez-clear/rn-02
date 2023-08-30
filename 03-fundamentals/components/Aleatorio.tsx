import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  min: number
  max: number
}

const Aleatorio = ({ min, max }: Props) => {
  const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <View>
      <Text>Número aleatório: {aleatorio}</Text>
    </View>
  )
}

export default Aleatorio
