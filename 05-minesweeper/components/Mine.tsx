import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mine = () => {

  return (
    <View style={styles.container}>
      <View style={styles.coreMine}></View>
      <View style={styles.line}></View>
      <View style={[styles.line, { transform: [{ rotate: "45deg" }] }]}></View>
      <View style={[styles.line, { transform: [{ rotate: "90deg" }] }]}></View>
      <View style={[styles.line, { transform: [{ rotate: "135deg" }] }]}></View>
    </View>
  )
}

export default Mine

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    jsutifyContent: "center",
    position: "relative"
  },
  coreMine: {
    height: 14,
    width: 14,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    position: "absolute",
    height: 3,
    width: 20,
    backgroundColor: "black",
    borderRadius: 3,
    left: -3,
    top: 5,
  },
})  
