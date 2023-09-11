import { View, Text } from 'react-native'
import React from 'react'
import { CheckContainer, Container, Content, EstimateDate, Title } from './task.styled'
import Octicons from '@expo/vector-icons/Octicons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type Props = Omit<ITask, "id">

const Task = ({ title, estimateAt, doneAt }: Props) => {
  const date = format(estimateAt, "EEEEEE',' dd 'de' MMMM", { locale: ptBR })
  return (
    <Container>
      <CheckTask doneAt={doneAt} />
      <Content>
        <Title doneAt={doneAt}>{title}</Title>
        <EstimateDate>
          {date}
        </EstimateDate>
      </Content>
    </Container>
  )
}

const CheckTask = ({ doneAt }: { doneAt?: Date }) => {

  return (
    <CheckContainer>
      {doneAt ? (
        <Octicons name='check-circle' size={20} color={"#4d9931"} />
      ) : (
        <Octicons name='circle' size={20} color={"#AAA"} />
      )}
    </CheckContainer>

  )
}

export default Task   
