import { View, Text, Button } from 'react-native'
import React from 'react'

interface Props {
  min: number
  max: number
  showValue: (value: number) => void
}

const Filho = ({ min, max, showValue }: Props) => {

  const generateNumber = () => {
    const fator = max - min + 1

    return Math.trunc(Math.random() * fator + min)
  }
  return (
    <View>
      <Button title='executar' onPress={() => {
        const number = generateNumber()

        showValue(number)
      }} />
    </View>
  )
}

export default Filho
