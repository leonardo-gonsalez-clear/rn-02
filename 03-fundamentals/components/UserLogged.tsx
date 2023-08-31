import { View, Text } from 'react-native'
import React from 'react'
import { If } from './If'

interface Props {
  name: string
  email: string
}

const UserLogged = ({ name, email }: Props) => {
  return (
    <View>
      <If teste={!!name && !!email}>
        <>
          <Text>Usuário Logado</Text>
          <Text>nome: {name} - email: {email}</Text>
        </>
      </If>
    </View>
  )
}

export default UserLogged
