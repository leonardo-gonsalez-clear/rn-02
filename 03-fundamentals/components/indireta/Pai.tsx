import { View, Text } from 'react-native'
import React from 'react'
import Filho from './Filho'

const Pai = () => {
  const [num, setNum] = React.useState(0)

  const showValue = (value: number) => {
    setNum(value)
  }

  return (
    <View>
      <Filho showValue={showValue} max={100} min={0} />
      <Text>{num}</Text>
    </View>
  )
}

export default Pai
