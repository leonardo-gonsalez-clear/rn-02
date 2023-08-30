import { View, Text, Button } from 'react-native'
import React from 'react'

const Botao = () => {

  const executar = () => {
    console.warn("Executado")
  }

  const executar2 = () => {
    console.warn("Executado 2")
  }

  return (
    <>
      <Button title='Executar' onPress={executar} />
      <Button title='Executar' onPress={executar2} />
    </>
  )
}
export default Botao

