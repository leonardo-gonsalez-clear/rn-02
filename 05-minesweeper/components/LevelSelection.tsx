import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
  isVisible: boolean
  onCancel: () => void
  onLevelSelected: (level: number) => void
}

const LevelSelection = ({ onCancel, isVisible, onLevelSelected }: Props) => {
  return (
    <Modal onRequestClose={onCancel} visible={isVisible} animationType='slide' transparent>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nível</Text>
          <TouchableOpacity style={[styles.button, styles.easy]} onPress={() => onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.normal]} onPress={() => onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.hard]} onPress={() => onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default LevelSelection

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  easy: {
    backgroundColor: '#49b65d',
  },
  normal: {
    backgroundColor: '#2765F7',
  },
  hard: {
    backgroundColor: '#F26337',
  },


})
