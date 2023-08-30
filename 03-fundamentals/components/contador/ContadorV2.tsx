import { View, Text } from 'react-native'
import React from 'react'
import ContadorDisplay from './ContadorDisplay'
import ContadorButtons from './ContadorButtons'

const ContadorV2 = () => {
  const [num, setNum] = React.useState(0)

  const inc = () => setNum(prev => prev + 1)
  const dec = () => setNum(prev => prev - 1)

  return (
    <View style={{ gap: 20 }}>
      <ContadorDisplay num={num} />
      <ContadorButtons inc={inc} dec={dec} />
    </View>
  )
}

export default ContadorV2
