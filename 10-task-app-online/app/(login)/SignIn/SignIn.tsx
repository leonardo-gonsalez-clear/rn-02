import { View, Text, Button } from 'react-native'
import React from 'react'
import { Container, Content, Form, Title } from './signIn.styled'
import { Input } from '../../../interfaces/AddTask/addTask.styled'

const Login = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  })

  return (
    <Container source={require("../../../assets/images/login.jpg")}>
      <Title>Tasks</Title>
      <Content>

        <Form>
          <Input
            placeholder='E-mail'
            onChangeText={(v) => setData(prev => ({ ...prev, email: v }))} />
          <Input
            placeholder='***********'
            onChangeText={(v) => setData(prev => ({ ...prev, password: v }))} />
          <Button title='Entrar' />
        </Form>
      </Content>
    </Container>
  )
}

export default Login
