import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Btn, BtnText, ButtonWrapper, Container, Content, Header, HeaderText, Input, Wrapper } from './addTask.styled'
import theme from '../../constants/colors'
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker'
import useTasksStore from '../../stores/useTasksStore'
import { apiAuth } from '../../services/api'

interface Props {
  isVisible: boolean
  onClose: () => void
}

const AddTask = ({ isVisible, onClose }: Props) => {
  const [title, setTitle] = React.useState<string>("")
  const [date, setDate] = React.useState<Date>(new Date())
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)

  const handleAddTask = async () => {
    if (!title.trim()) return

    const taskToAdd: ITask = {
      id: Math.random(),
      description: title.trim(),
      estimateAt: date,
      doneAt: undefined
    }

    try {

      await (await apiAuth()).post('/tasks', taskToAdd)
      setTasks([...tasks, taskToAdd])
      setTitle("")
      setDate(new Date())
      onClose()

    }
    catch (e) {
      console.log(e)
    }

  }

  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <TouchableWithoutFeedback onPress={onClose}>
        <Container>
          <Wrapper activeOpacity={1}>
            <Header>
              <HeaderText>Nova tarefa</HeaderText>
            </Header>
            <Content>
              <Input
                placeholder='Adicionar tarefa...'
                onChangeText={(t) => setTitle(t)}
                value={title}
              />

              <DateTimePicker date={date} setDate={setDate} />
              <ButtonWrapper>
                <Btn style={{ backgroundColor: "transparent" }}>
                  <BtnText
                    style={{ color: theme.colors.today }}
                    onPress={onClose}
                  >
                    Cancelar
                  </BtnText>
                </Btn>
                <Btn>
                  <BtnText onPress={handleAddTask}>Adicionar</BtnText>
                </Btn>
              </ButtonWrapper>
            </Content>
          </Wrapper>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default AddTask
