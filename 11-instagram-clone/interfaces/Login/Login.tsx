import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Container, Input, ButtonText, Button } from './login.styled'
import { useRouter } from 'expo-router'
import { Octicons } from '@expo/vector-icons'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleLogin = () => {

  }

  return (
    <Container>
      <Button
        onPress={() => router.push("/(1-tabs)/")}
        style={{ width: "auto", alignSelf: "flex-start" }}>
        <Octicons name="arrow-left"
          size={24} color="black" />
      </Button>
      <Input
        autoFocus
        placeholder='Email'
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder='Senha'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <Button onPress={() => router.push("/(2-login)/Registrar")}>
        <ButtonText>Criar conta</ButtonText>
      </Button>
    </Container>
  )
}
export default Login

