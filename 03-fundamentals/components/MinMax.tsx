import { StyleSheet, Text, View } from "react-native"
import React from "react"

interface Props {
  num1: number
  num2: number
}

export default function MinMax({ num1, num2 }: Props) {



  return (
    <View>
      <Text>Numero mínimo: {num1 < num2 ? num1 : num2}</Text>
      <Text>Numero máximo: {num1 > num2 ? num1 : num2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
