import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './components/params';
import Field from './components/Field';
import createMinedBoard from './components/functions';
import React from 'react'
import MineField from './components/MineField';

const minesAmount = () => {
  const cols = params.getCollumnsAmount()
  const rows = params.getRowsAmount()

  return Math.ceil((cols * rows) * params.difficultLevel)
}

const createBoard = () => {
  const cols = params.getCollumnsAmount()
  const rows = params.getRowsAmount()

  return {
    board: createMinedBoard(rows, cols, minesAmount())
  }
}
export default function App() {
  const [board, setBoard] = React.useState(createBoard())

  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getCollumnsAmount()}</Text>

      <View>
        <MineField board={board.board} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
