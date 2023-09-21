import { View, Text } from 'react-native'
import React from 'react'
import { Input, ButtonText, Button, Container } from "../Login/login.styled"
import useUserStore from '../../stores/useUserStore'
import { useRouter } from 'expo-router'

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const setUser = useUserStore(state => state.setUser)
  const router = useRouter()

  const handleSubmit = () => {
    setUser({
      name,
      email,
      avatarUrl: ""
    })

    router.push("/Profile")
  }

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

      <Button onPress={handleSubmit}>
        <ButtonText>Registrar</ButtonText>
      </Button>
    </Container>
  )
}

export default Register
