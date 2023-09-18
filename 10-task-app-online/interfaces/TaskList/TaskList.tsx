import React from 'react'
import { FlatList, ImageSourcePropType } from 'react-native'
import { BgImage, Container, Content, IconAdd, IconBar, SubTitle, Title } from './taskList.styled'
import { endOfDay, format, addDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Task from '../../components/Task/Task'
import useTasksStore from "../../stores/useTasksStore"
import Octicons from '@expo/vector-icons/Octicons'
import AddTask from '../AddTask/AddTask'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiAuth } from '../../services/api'
import { useRoute } from '@react-navigation/native'
import today from '../../assets/images/today.jpg'
import tomorrow from '../../assets/images/tomorrow.jpg'
import week from '../../assets/images/week.jpg'
import month from '../../assets/images/month.jpg'
import { useFocusEffect } from 'expo-router/src/useFocusEffect'
import { useRouter } from 'expo-router'
import { usePathname } from 'expo-router/src/hooks'

interface IProps {
  daysAhead?: number
}

const tabsName = {
  index: "Hoje",
  Tomorrow: "Amanhã",
  Week: "Semana",
  Month: "Mês"
}

const images = {
  index: today,
  Tomorrow: tomorrow,
  Week: week,
  Month: month
}

const TaskList = ({ daysAhead }: IProps) => {
  const tasks = useTasksStore(state => state.tasks)
  const setTasks = useTasksStore(state => state.setTasks)
  const [tasksVisible, setTasksVisible] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [filteredTasks, setFilteredTasks] = React.useState<ITask[]>(tasks)
  const router = useRoute()
  const path = usePathname()
  const date = format(endOfDay(addDays(new Date(), daysAhead || 0)), "yyyy-MM-dd HH:mm:ss")

  const handleDeleteTask = async (id: number | string) => {
    try {
      await (await apiAuth()).delete(`tasks/${id}`)
      const filteredTasks = tasks.filter(task => task.id !== id)
      setTasks(filteredTasks)

    } catch (e) {
      console.log(e)
    }
  }

  const handleToggleTasks = async () => {
    setTasksVisible(!tasksVisible)

  }

  const getTasks = React.useCallback(async () => {
    try {
      const data: ITask[] = await (await apiAuth()).get(`/tasks?date=${date}`).then(res => res.data)
      setTasks(data)
      console.log("BUSCOU", date)
    } catch (err) {
      console.log(err)
    }
  }, [date])

  React.useEffect(() => {
    console.log("FOCUS")
    getTasks()
  }, [path])

  return (
    <Container>
      <AddTask
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <BgImage source={images[router.name as keyof typeof images] as ImageSourcePropType}>
        <IconBar onPress={handleToggleTasks}>
          <Octicons
            name={tasksVisible ? "eye-closed" : "eye"}
            size={20}
            color={"#FFF"} />
        </IconBar>
        <SubTitle>{tabsName[router.name as keyof typeof tabsName]}</SubTitle>
        <Title>{format(new Date(date), "EEEEEE, dd 'de' MMMM", { locale: ptBR })}</Title>
      </BgImage>
      <Content style={{ flex: 7 }}>
        <FlatList
          data={tasks}
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
