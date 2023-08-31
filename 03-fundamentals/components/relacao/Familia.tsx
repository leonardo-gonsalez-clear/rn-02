import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Familia = ({ children }: Props) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default Familia
