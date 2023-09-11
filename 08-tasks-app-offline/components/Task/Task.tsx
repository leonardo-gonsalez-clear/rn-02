import { View, Text } from 'react-native'
import React from 'react'
import { CheckContainer, Container, Content, EstimateDate, Title } from './task.styled'
import Octicons from '@expo/vector-icons/Octicons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import useTasksStore from '../../stores/useTasksStore'

type Props = ITask

const Task = ({ title, estimateAt, doneAt, id }: Props) => {
  const date = format(estimateAt, "EEEEEE',' dd 'de' MMMM", { locale: ptBR })
  const task = { title, estimateAt, doneAt, id }
  return (
    <Container>
      <CheckTask {...task} />
      <Content>
        <Title doneAt={doneAt}>{title}</Title>
        <EstimateDate>
          {date}
        </EstimateDate>
      </Content>
    </Container>
  )
}

const CheckTask = ({ estimateAt, title, doneAt, id }: Props) => {
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)

  const handleCheck = () => {
    console.log(title)

    const checkedTask = tasks.map(t => t.id === id ? { ...t, doneAt: doneAt ? null : new Date() } : t)

    setTasks(checkedTask)
  }

  return (
    <CheckContainer onPress={handleCheck}>
      {doneAt ? (
        <Octicons name='check-circle' size={20} color={"#4d9931"} />
      ) : (
        <Octicons name='circle' size={20} color={"#AAA"} />
      )}
    </CheckContainer>

  )
}

export default Task   
