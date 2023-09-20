import { View, Text } from 'react-native'
import React from 'react'
import { Input, ButtonText, Button, Container } from "../Login/login.styled"

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Container>
      <Input
        placeholder='Nome'
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <Input
        placeholder='Senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button>
        <ButtonText>Registrar</ButtonText>
      </Button>
    </Container>
  )
}

export default Register
