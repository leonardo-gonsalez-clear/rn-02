import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import params from './components/params';
import Field from './components/Field';
import createMinedBoard, { openField, cloneBoard, hadExplosion, wonGame, showMines, invertFlag } from './components/functions';
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
  const [won, setWon] = React.useState(false)
  const [lost, setLost] = React.useState(false)


  const onOpenField = (row: number, column: number) => {
    const boardCloned = cloneBoard(board.board)
    openField(boardCloned, row, column)
    const lost = hadExplosion(boardCloned)
    const won = wonGame(boardCloned)

    if (lost) {
      showMines(boardCloned)
      Alert.alert('Perdeu', 'Que pena!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }

    setBoard({ board: boardCloned })
    setLost(lost)
    setWon(won)
  }

  const onSelectField = (row: number, column: number) => {
    const boardCloned = cloneBoard(board.board)
    invertFlag(boardCloned, row, column)
    const won = wonGame(boardCloned)
    if (won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }
    setBoard({ board: boardCloned })
    setWon(won)
  }

  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getCollumnsAmount()}</Text>

      <View>
        <MineField board={board.board} onOpenField={onOpenField} onSelectField={onSelectField} />
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
