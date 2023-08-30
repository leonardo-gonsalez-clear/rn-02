import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  num: number
}

const ContadorDisplay = ({ num }: Props) => {
  return (
    <View>
      <Text style={{ backgroundColor: "#eee", padding: 10, fontWeight: "bold", fontSize: 20 }}>{num}</Text>
    </View>
  )
}

export default ContadorDisplay
