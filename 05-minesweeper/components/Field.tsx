import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import params from './params'


interface Props {
  opened: boolean
  mined: boolean
  nearMines: number
}

const Field = ({ mined, opened, nearMines }: Props) => {

  const styleField = [styles.field, opened && styles.opened, styles.regular]

  const color = {
    [1]: '#2A28D7',
    [2]: '#2B520F',
    [3 || 4 || 5]: '#F9060A',
    [6 || 7 || 8]: '#F221A9',
  }

  return (
    <View style={[styleField, { backgroundColor: color[2] }]}>
    </View >
  )
}

export default Field

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
  }
})
