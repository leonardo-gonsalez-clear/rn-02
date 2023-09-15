import { View, Text, Button } from 'react-native'
import React from 'react'
import { Container, Content, Form, Title } from './signUp.styled'
import { Input } from '../../../interfaces/AddTask/addTask.styled'
import { useRouter } from 'expo-router'
import axios from 'axios'
import { api } from '../../../services/api'

const SignUp = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleLogin = () => {
    console.log(data)

    api.post("/user", data)
      .then((res) => {
        console.log(res.data)
        router.push("/(login)/SignIn")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Container source={require("../../../assets/images/login.jpg")}>
      <Title>Tasks</Title>
      <Content>

        <Form>
          <Input
            placeholder='Nome'
            onChangeText={(v) => setData(prev => ({ ...prev, name: v }))} />
          <Input
            placeholder='Email'
            onChangeText={(v) => setData(prev => ({ ...prev, email: v }))} />
          <Input
            placeholder='***********'
            onChangeText={(v) => setData(prev => ({ ...prev, password: v }))} />
          <Button title='Criar' onPress={handleLogin} />
          <Button title='Já tenho uma conta' onPress={() => router.push("/SignIn/")} />
        </Form>
      </Content>
    </Container>
  )
}

export default SignUp
