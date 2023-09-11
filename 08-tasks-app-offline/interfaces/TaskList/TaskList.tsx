import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'
import useTasksStore from "../../stores/useTasksStore"


const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)

  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })
  return (
    <Container>
      <BgImage source={require("../../assets/images/today.jpg")}>
        <SubTitle> Hoje</SubTitle>
        <Title>{today}</Title>
      </BgImage>

      <Content
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Task {...item} />} />
    </Container>
  )
}

export default TaskList
