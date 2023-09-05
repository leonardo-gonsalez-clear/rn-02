import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import params from './components/params';
import Field from './components/Field';
import createMinedBoard, { openField, cloneBoard, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './components/functions';
import React from 'react'
import MineField from './components/MineField';
import Header from './components/Header';
import LevelSelection from './components/LevelSelection';

const minesAmount = () => {
  const cols = params.getCollumnsAmount()
  const rows = params.getRowsAmount()

  return Math.ceil((cols * rows) * params.difficultLevel)
}

export default function App() {
  const createBoard = () => {
    const cols = params.getCollumnsAmount()
    const rows = params.getRowsAmount()
    const board = createMinedBoard(rows, cols, minesAmount())
    return {
      board: board,
    }
  }

  const [board, setBoard] = React.useState(createBoard())
  const [won, setWon] = React.useState(false)
  const [lost, setLost] = React.useState(false)
  const [showLevelSelection, setShowLevelSelection] = React.useState(false)

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

  const newGame = () => {
    const board = createBoard()
    setBoard(board)
    setWon(false)
    setLost(false)
    setShowLevelSelection(false)
  }

  const onLevelSelected = (level: number) => {
    params.difficultLevel = level
    const board = createBoard()
    setBoard(board)
    setShowLevelSelection(false)
  }

  return (
    <View style={styles.container}>
      <LevelSelection isVisible={showLevelSelection} onLevelSelected={onLevelSelected} onCancel={() => setShowLevelSelection(false)} />
      <Header
        flagsLeft={minesAmount() - flagsUsed(board.board)}
        onNewGame={() => newGame()} onFlagPress={() => setShowLevelSelection(true)} />
      <View>
        <MineField board={board.board} onOpenField={onOpenField} onSelectField={onSelectField} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
