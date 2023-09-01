import { ButtonProps, Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

interface Props extends TouchableOpacityProps {
  children: React.ReactNode
  double?: boolean
  triple?: boolean
  operation?: boolean
  props?: TouchableOpacityProps
}

const Button = ({ children, double, triple, operation, ...props }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, double && styles.double, triple && styles.triple, operation && styles.operation]} {...props}>
      <Text style={[styles.text, operation && styles.operation]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    // borderRadius: 5,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#FFA500",
  },
  text: {
    color: "#FFA500",
    fontSize: 40,
  },
  double: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  triple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  operation: {
    color: "#fff",
    backgroundColor: "#FFA500",
    borderColor: "#fff",
  }
})
