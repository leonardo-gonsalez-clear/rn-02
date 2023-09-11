import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'

const data: ITask[] = [
  {
    id: Math.random(),
    title: 'Fazer mudança',
    doneAt: new Date(),
    estimateAt: new Date()
  },
  {
    id: Math.random(),
    title: 'Faxina',
    estimateAt: new Date()
  }
]

const TaskList = () => {

  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })
  return (
    <Container>
      <BgImage source={require("../../assets/images/today.jpg")}>
        <SubTitle> Hoje</SubTitle>
        <Title>{today}</Title>
      </BgImage>

      <Content
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Task {...item} />} />
    </Container>
  )
}

export default TaskList
