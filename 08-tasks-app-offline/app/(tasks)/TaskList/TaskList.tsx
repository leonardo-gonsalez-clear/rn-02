import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const TaskList = () => {
  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })
  return (
    <Container>
      <BgImage source={require("../../../assets/images/today.jpg")}>
        <SubTitle>Hoje</SubTitle>
        <Title>{today}</Title>
      </BgImage>

      <Content>
        <Text>TaskList</Text>
      </Content>
    </Container>
  )
}

export default TaskList
