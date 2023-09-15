import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { BgImage, Container, Content, IconAdd, IconBar, SubTitle, Title } from './taskList.styled'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'
import useTasksStore, { data } from "../../stores/useTasksStore"
import Octicons from '@expo/vector-icons/Octicons'
import AddTask from '../AddTask/AddTask'
import AsyncStorage from '@react-native-async-storage/async-storage'


const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)
  const [tasksVisible, setTasksVisible] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const today = format(new Date(), "dd 'de' MMMM", { locale: ptBR })
  const [filteredTasks, setFilteredTasks] = React.useState<ITask[]>(tasks)

  const handleDeleteTask = (id: number | string) => {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  const handleToggleTasks = () => {
    setTasksVisible(!tasksVisible)
  }

  React.useEffect(() => {
    let filteredTasksNew: ITask[] = []
    if (tasksVisible) {
      filteredTasksNew = tasks.filter(task => !task.doneAt)
      setFilteredTasks(filteredTasksNew)
    } else {
      filteredTasksNew = tasks
      console.log(filteredTasks)
      setFilteredTasks(filteredTasksNew)
    }

    !filteredTasks.length && AsyncStorage.setItem("tasks", JSON.stringify(filteredTasks)).then(() => console.log("tasks saved"))
  }, [tasks, tasksVisible])

  React.useEffect(() => {
    const getTasks = async () => {
      const newTasks: ITask[] = await AsyncStorage.getItem("tasks").then(res => res ? JSON.parse(res) : [])
      if (!newTasks.length) return setTasks(data)
      console.log(newTasks)
      if (tasks.length) {
        // console.log(tasks.map(t => ({ ...t, estimateAt: new Date(t.estimateAt) })))
        setFilteredTasks(newTasks.map(t => ({ ...t, estimateAt: new Date(t.estimateAt) })))
        // setTasks(tasks)
      }
    }

    getTasks()

  }, [])

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
