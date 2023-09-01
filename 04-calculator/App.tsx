import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import React from 'react';

type TOperations = "/" | "*" | "+" | "-" | "="

export default function App() {
  const [display, setDisplay] = React.useState("0")

  const clearMemory = () => {
    setDisplay("0")
  }

  const setOperation = (operation: TOperations) => {

  }

  const addDigit = (n: string) => {
    setDisplay(n)
  }

  return (
    <View style={styles.container}>
      <Display value={display} />
      <View style={styles.buttons}>
        <Button triple onPress={clearMemory}>AC</Button>
        <Button operation onPress={() => setOperation("/")}>/</Button>
        <Button onPress={() => addDigit("7")}>7</Button>
        <Button onPress={() => addDigit("8")}>8</Button>
        <Button onPress={() => addDigit("9")}>9</Button>
        <Button operation onPress={() => setOperation("*")}>*</Button>
        <Button onPress={() => addDigit("4")}>4</Button>
        <Button onPress={() => addDigit("5")}>5</Button>
        <Button onPress={() => addDigit("6")}>6</Button>
        <Button operation onPress={() => setOperation("-")}>-</Button>
        <Button onPress={() => addDigit("1")}>1</Button>
        <Button onPress={() => addDigit("2")}>2</Button>
        <Button onPress={() => addDigit("3")}>3</Button>
        <Button operation onPress={() => setOperation("+")}>+</Button>
        <Button double onPress={() => addDigit("0")}>0</Button>
        <Button onPress={() => addDigit(".")}>.</Button>
        <Button onPress={() => setOperation("=")}>=</Button>
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
