import { View, Text } from 'react-native'
import React from 'react'
import Filho from './Filho'

const Pai = () => {
  const a = 100
  const b = 200

  return (
    <View>
      <Filho b={b} a={a} />
    </View>
  )
}

export default Pai
