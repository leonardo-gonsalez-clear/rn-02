import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  nome: string
  sobrenome: string
}

const Filho = ({ nome, sobrenome }: Props) => {
  return (
    <View>
      <Text>{nome}</Text>
      <Text>{sobrenome}</Text>
    </View>
  )
}

export default Filho
