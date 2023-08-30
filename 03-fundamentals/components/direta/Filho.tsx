import { View, Text } from 'react-native'
import React from 'react'

const Filho = ({ a, b }: { a: number, b: number }) => {
  return (
    <View>
      <Text>{a}</Text>
      <Text>{b}</Text>
    </View>
  )
}

export default Filho
