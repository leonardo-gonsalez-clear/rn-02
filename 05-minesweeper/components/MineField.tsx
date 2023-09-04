import React from "react"
import { View, StyleSheet } from "react-native"
import Field from "./Field"
import { openField } from "./functions"

interface Props {
  board: ICell[][]
  onOpenField: (row: number, column: number) => void
}

const MineField = ({ board, onOpenField }: Props) => {

  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} />
    })

    return <View key={r} style={{ flexDirection: "row" }}>{columns}</View>
  })

  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
  }
})

export default MineField
