import { View, Text, Button } from 'react-native'
import React from 'react'
import { Container, Content, Form, Title } from './signIn.styled'
import { Input } from '../../../interfaces/AddTask/addTask.styled'
import { useRouter } from 'expo-router'
import { api } from '../../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialData = {
  email: "",
  password: "",
}

const Login = () => {
  const [data, setData] = React.useState({ ...initialData })
  const router = useRouter()

  const handleLogin = () => {
    console.log(data)

    api.post("/signin", data)
      .then(async (res) => {
        console.log(res.data.token)
        await AsyncStorage.setItem("token", res.data.token)
        router.push("/(tasks)/")
        setData({ ...initialData })
      })
      .catch((err) => {
        console.log(err)
      }
      )
  }

  return (
    <Container source={require("../../../assets/images/login.jpg")}>
      <Title>Tasks</Title>
      <Content>

        <Form>
          <Input
            placeholder='E-mail'
            value={data.email}
            onChangeText={(v) => setData(prev => ({ ...prev, email: v }))} />
          <Input
            placeholder='***********'
            value={data.password}
            onChangeText={(v) => setData(prev => ({ ...prev, password: v }))} />
          <Button title='Entrar' onPress={handleLogin} />
          <Button title='Criar Conta' onPress={() => router.push("/SignUp/")} />
        </Form>
      </Content>
    </Container>
  )
}

export default Login
