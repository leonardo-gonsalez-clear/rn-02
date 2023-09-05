import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Flag from './Flag'

interface Props {
  flagsLeft: number
  onNewGame: () => void
  onFlagPress: () => void
}

const Header = ({ flagsLeft, onNewGame, onFlagPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>

        <TouchableOpacity onPress={onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>

        <Text style={styles.flagLeft}>= {flagsLeft}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onNewGame}>
        <Text style={styles.buttonLabel}>Novo jogo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,

  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  button: {
    backgroundColor: '#999',
    padding: 5,
  },
  flagLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold',
  }
})
