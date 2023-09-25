import { View, Text, ActivityIndicator, Alert } from 'react-native'
import React from 'react'
import { Input, ButtonText, Button, Container } from "../Login/login.styled"
import useUserStore from '../../stores/useUserStore'
import { useRouter } from 'expo-router'

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const createUser = useUserStore(state => state.createUser)
  const signInUser = useUserStore(state => state.signIn)
  const loading = useUserStore(state => state.loading)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!email || !password || !name) return

    await createUser(name, email, password)

    await signInUser(email, password)
      .then(() => {
        router.push("/(1-tabs)/")
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível fazer o login")
      })
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
        <ButtonText>
          {loading ? <ActivityIndicator color="#212121" size={24} /> : "Registrar"}
        </ButtonText>
      </Button>
    </Container>
  )
}

export default Register
