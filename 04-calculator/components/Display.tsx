import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  value: string
}

const Display = ({ value }: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.display}>{value}</Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#000b",
  },
  display: {
    fontSize: 60,
    color: "#fff",
  }
})  
