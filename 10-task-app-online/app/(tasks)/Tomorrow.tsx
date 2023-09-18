import { View, Text } from 'react-native'
import React from 'react'
import TaskList from '../../interfaces/TaskList/TaskList'

const Tomorrow = () => {
  return <TaskList daysAhead={1} />
}

export default Tomorrow
