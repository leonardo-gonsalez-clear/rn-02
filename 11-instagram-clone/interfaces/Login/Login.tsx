import { ActivityIndicator } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Container, Input, ButtonText, Button } from './login.styled'
import { useRouter } from 'expo-router'
import { Octicons } from '@expo/vector-icons'
import useUserStore from '../../stores/useUserStore'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()
  const signInUser = useUserStore((state) => state.signIn)
  const loading = useUserStore((state) => state.loading)

  const handleLogin = async () => {
    if (!email || !password) return alert('Preencha todos os campos')

    await signInUser(email, password)

    router.push("/(1-tabs)/")
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
        <ButtonText>
          {loading ? <ActivityIndicator color="#212121" size={24} /> : "Entrar"}
        </ButtonText>
      </Button>
      <Button onPress={() => router.push("/(2-login)/Registrar")}>
        <ButtonText>Regitrar</ButtonText>
      </Button>
    </Container>
  )
}
export default Login

