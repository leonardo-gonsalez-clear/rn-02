import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './components/params';
import Field from './components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getCollumnsAmount()}</Text>

      <Field nearMines={1} opened={true} mined={false} />
      <Field nearMines={4} opened={true} mined={false} />
      <Field nearMines={8} opened={true} mined={false} />
      <Field nearMines={8} opened={false} mined={false} flagged={true} />
      <Field nearMines={2} opened={false} mined={false} />
      <Field nearMines={2} opened={true} mined={true} />
      <Field nearMines={2} opened={true} mined={true} exploded />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
