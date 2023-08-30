import { View, Text, Button } from 'react-native'
import React from 'react'

interface Props {
  inicial?: number
  passo?: number
}

const Contador = ({ inicial = 0, passo = 1 }: Props) => {
  const [numero, setNumero] = React.useState(inicial)

  const inc = () => setNumero(prev => prev + passo)

  const dec = () => setNumero(prev => prev - passo)

  return (
    <View>
      <Text>{numero}</Text>
      <Button title='+' onPress={inc} />
      <Button title='-' onPress={dec} />
    </View>
  )
}

export default Contador 
