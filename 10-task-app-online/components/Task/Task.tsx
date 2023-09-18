import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CheckContainer, Container, Content, EstimateDate, LeftSwipeableContainer, RightSwipeableContainer, Title } from './task.styled'
import Octicons from '@expo/vector-icons/Octicons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import useTasksStore from '../../stores/useTasksStore'
import Swipeable from "react-native-gesture-handler/Swipeable"
import { apiAuth } from '../../services/api'

type Props = ITask & {
  onDelete: (id: number | string) => void
}

const Task = ({ description, estimateAt, doneAt, id, onDelete }: Props) => {
  const date = format(new Date(estimateAt), "EEEEEE',' dd 'de' MMMM", { locale: ptBR })
  const task = { description, estimateAt, doneAt, id }

  const handleRightAction = () => {

    return (
      <RightSwipeableContainer onPress={() => onDelete(id)}>
        <Octicons name='trash' color={"#fff"} size={25} />
      </RightSwipeableContainer>
    )
  }

  const handleLeftAction = () => {

    return (
      <LeftSwipeableContainer>
        <Octicons name='trash' color={"#fff"} size={25} />
        <Text style={{ color: "#fff" }}>Excluir</Text>
      </LeftSwipeableContainer>
    )
  }

  return (
    <Swipeable
      renderRightActions={handleRightAction}
      renderLeftActions={handleLeftAction}
      onSwipeableOpen={(d) => d === "left" && onDelete(id)}
    >
      <Container>
        <CheckTask {...task} />
        <Content>
          <Title doneAt={doneAt}>{description}</Title>
          <EstimateDate>
            {date}
          </EstimateDate>
        </Content>
      </Container>
    </Swipeable>
  )
}

const CheckTask = ({ estimateAt, description, doneAt, id }: ITask) => {
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)

  const handleCheck = async () => {

    try {
      (await apiAuth()).patch(`/tasks/${id}`)
      const checkedTask = tasks.map(t => t.id === id ? { ...t, doneAt: doneAt ? null : new Date() } : t)
      setTasks(checkedTask)
    }
    catch (e) {
      console.log(e)
    }
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
