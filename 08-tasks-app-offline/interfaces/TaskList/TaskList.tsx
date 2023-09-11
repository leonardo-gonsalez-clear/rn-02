import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, IconBar, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'
import useTasksStore from "../../stores/useTasksStore"
import Octicons from '@expo/vector-icons/Octicons'
import AddTask from '../AddTask/AddTask'


const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const [tasksVisible, setTasksVisible] = React.useState(true)
  const [modalVisible, setModalVisible] = React.useState(true)
  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })

  const handleToggleTasks = () => {
    setTasksVisible(!tasksVisible)
  }

  const filteredTasks = React.useMemo(() => {
    if (tasksVisible) {
      return tasks.filter(task => !task.doneAt)
    } else {
      return tasks
    }
  }, [tasks, tasksVisible])

  return (
    <Container>
      <AddTask isVisible={modalVisible} onClose={() => setModalVisible(false)} />
      <BgImage source={require("../../assets/images/today.jpg")}>
        <IconBar onPress={handleToggleTasks}>
          <Octicons
            name={tasksVisible ? "eye-closed" : "eye"}
            size={20}
            color={"#FFF"} />
        </IconBar>
        <SubTitle>Hoje</SubTitle>
        <Title>{today}</Title>
      </BgImage>

      <Content
        data={filteredTasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Task {...item} />} />
    </Container>
  )
}

export default TaskList
