import { View, Text } from 'react-native'
import React from 'react'
import text from '../styles/text'

interface Props {
  title: string
  subtitle: string
}

const Titulo = ({ title, subtitle }: Props) => {
  return (
    <>
      <Text style={text.h1}>{title}</Text>
      <Text style={text.p}>{subtitle}</Text>
    </ >
  )
}

export default Titulo
