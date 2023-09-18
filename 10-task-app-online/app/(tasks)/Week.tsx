import { View, Text } from 'react-native'
import React from 'react'
import TaskList from '../../interfaces/TaskList/TaskList'

const Week = () => {
  return <TaskList daysAhead={7} />
}

export default Week
