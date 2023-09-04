import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import params from './params'
import Mine from './Mine'
import Flag from './Flag'


interface Props {
  opened: boolean
  mined: boolean
  nearMines: number
  exploded?: boolean
  flagged?: boolean
}

const Field = ({ mined, opened, nearMines, exploded, flagged }: Props) => {

  const styleField = [styles.field, opened && styles.opened, styles.regular, mined && exploded && styles.exploded, flagged && styles.flagged]

  const color = {
    [1]: '#2A28D7',
    [2]: '#2B520F',
    [3]: '#F9060A',
    [4]: '#F221A9',
    [5]: '#F221A9',
    [6]: '#F221A9',
    [7]: '#F221A9',
    [8]: '#F221A9',
  }

  return (
    <View style={[styleField]}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, { color: color[nearMines as keyof typeof color] }]}>
          {nearMines}</Text>
      ) : false
      }

      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
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
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  flagged: {

  }
})
