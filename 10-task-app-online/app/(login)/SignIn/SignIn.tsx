import { View, Text, Button } from 'react-native'
import React from 'react'
import { Container, Content, Form, Title } from './signIn.styled'
import { Input } from '../../../interfaces/AddTask/addTask.styled'
import { useRouter } from 'expo-router'
import { api } from '../../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useUserStore from '../../../stores/useUserStore'

const initialData = {
  email: "",
  password: "",
}

const Login = () => {
  const [data, setData] = React.useState({ ...initialData })
  const router = useRouter()
  const setUser = useUserStore(state => state.setUser)

  const handleLogin = () => {
    console.log(data)

    api.post("/signin", data)
      .then(async (res) => {
        const user: IUser & { token: string } = res.data
        setUser(user)
        await AsyncStorage.setItem("token", user.token)
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
