import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import React from 'react';

type TOperations = "/" | "*" | "+" | "-" | "="

const operationObj = {
  "+": (num1: number, num2: number) => num1 + num2,
  "-": (num1: number, num2: number) => num1 - num2,
  "/": (num1: number, num2: number) => num1 / num2,
  "*": (num1: number, num2: number) => num1 * num2,
}

export default function App() {
  const [display, setDisplay] = React.useState("0")
  const [operation, setOperation] = React.useState<null | TOperations>(null)
  const [values, setValues] = React.useState([0, 0])
  const [current, setCurrent] = React.useState(0)
  const [clearDisplay, setClearDisplay] = React.useState(false)

  const clearMemory = () => {
    setDisplay("0")
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
    setClearDisplay(false)
  }

  const handleOperation = (op: TOperations) => {
    if (current === 0) {
      setOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = op === "="
      const newValues = [...values]

      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`)

      } catch (e) {
        newValues[0] = values[0]
      }

      newValues[1] = 0

      setDisplay(String(newValues[0]))
      setOperation(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(newValues)
    }
  }

  const addDigit = (n: string) => {
    if (n === "." && display.includes(".")) return

    const shouldClearDisplay = display === "0" || clearDisplay
    const currentValue = shouldClearDisplay ? "" : display
    const displayValue = currentValue + n

    setDisplay(displayValue)
    setClearDisplay(false)

    if (n !== ".") {
      const newValue = parseFloat(displayValue)
      const newValues = [...values]
      newValues[current] = newValue
      setValues(newValues)
    }

  }

  return (
    <View style={styles.container}>
      <Display value={display} />
      <View style={styles.buttons}>
        <Button triple onPress={clearMemory}>AC</Button>
        <Button operation onPress={() => handleOperation("/")}>/</Button>
        <Button onPress={() => addDigit("7")}>7</Button>
        <Button onPress={() => addDigit("8")}>8</Button>
        <Button onPress={() => addDigit("9")}>9</Button>
        <Button operation onPress={() => handleOperation("*")}>*</Button>
        <Button onPress={() => addDigit("4")}>4</Button>
        <Button onPress={() => addDigit("5")}>5</Button>
        <Button onPress={() => addDigit("6")}>6</Button>
        <Button operation onPress={() => handleOperation("-")}>-</Button>
        <Button onPress={() => addDigit("1")}>1</Button>
        <Button onPress={() => addDigit("2")}>2</Button>
        <Button onPress={() => addDigit("3")}>3</Button>
        <Button operation onPress={() => handleOperation("+")}>+</Button>
        <Button double onPress={() => addDigit("0")}>0</Button>
        <Button onPress={() => addDigit(".")}>.</Button>
        <Button operation onPress={() => handleOperation("=")}>=</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 2
  }
});
