import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  title: string
  estimateAt: Date
  doneAt?: Date
}

const Task = ({ title, estimateAt, doneAt }: Props) => {
  return (
    <View>
      <Text>Task</Text>
    </View>
  )
}

export default Task
