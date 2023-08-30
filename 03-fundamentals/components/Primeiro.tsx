import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import text from "../styles/text"

export default function Primeiro() {
  // console.warn("Primeiro componente")

  return (
    <View style={s.container}>
      <Text style={text.h1}>Primeiro componente</Text>
      <Text style={text.p}>Adicionando estilos!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 4,
    borderColor: "#ddd",
    borderWidth: 1
  }
})
