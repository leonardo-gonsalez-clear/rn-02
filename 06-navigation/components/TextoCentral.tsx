import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  color: string
  children: React.ReactNode
}

const TextoCentral = ({ color, children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: color || "#fff" }}>
      <Text>
        {children}
      </Text>
    </View>
  )
}

export default TextoCentral

const styles = StyleSheet.create({})
