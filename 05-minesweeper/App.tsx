import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './components/params';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getCollumnsAmount()}</Text>
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
