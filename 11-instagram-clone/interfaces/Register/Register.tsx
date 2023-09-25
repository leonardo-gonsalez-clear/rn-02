import { View, Text } from 'react-native'
import React from 'react'
import { Input, ButtonText, Button, Container } from "../Login/login.styled"
import useUserStore from '../../stores/useUserStore'
import { useRouter } from 'expo-router'

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const createUser = useUserStore(state => state.createUser)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!email || !password || !name) return

    await createUser(name, email, password)

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
