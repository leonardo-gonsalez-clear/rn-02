import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TypeYourName = () => {
  const [name, setName] = React.useState('')

  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={(v) => setName(v)}
        value={name}
      />
    </View>
  )
}

export default TypeYourName
