import { View, Text, Button } from 'react-native'
import React from 'react'

interface Props {
  inc: () => void
  dec: () => void
}

const ContadorButtons = ({ inc, dec }: Props) => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Button title={"+"} onPress={inc} />
      <Button title={"-"} onPress={dec} />
    </View>
  )
}

export default ContadorButtons
