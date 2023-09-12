import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, IconAdd, IconBar, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'
import useTasksStore from "../../stores/useTasksStore"
import Octicons from '@expo/vector-icons/Octicons'
import AddTask from '../AddTask/AddTask'


const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)
  const [tasksVisible, setTasksVisible] = React.useState(true)
  const [modalVisible, setModalVisible] = React.useState(false)
  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })

  const handleDeleteTask = (id: number | string) => {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

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
      <AddTask
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
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
      <Content style={{ flex: 7 }}>
        <FlatList
          data={filteredTasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Task {...item} onDelete={handleDeleteTask} />} />
      </Content>

      <IconAdd onPress={() => setModalVisible(true)} activeOpacity={0.7}>
        <Octicons name='plus' size={25} color={"#fff"} />
      </IconAdd>
    </Container>
  )
}

export default TaskList
