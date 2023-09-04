import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flagPole}></View>
      <View style={styles.flag}></View>
      <View style={styles.base1}></View>
      <View style={styles.base2}></View>
    </View>
  )
}

export default Flag

const styles = StyleSheet.create({
  container: {
    marginTop: 2,

  },
  flagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  },
})
