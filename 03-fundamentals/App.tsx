import { StyleSheet, Text, View } from 'react-native';
import Aleatorio from './components/Aleatorio';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';


export default function App() {


  return (
    <View style={styles.container}>
      <Aleatorio min={0} max={10} />
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      <MinMax num1={12} num2={9} />
      <Primeiro />

      <Titulo title='Loja' subtitle='Bem-vindo à loja!' />
      <Botao />

      <Contador />
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
