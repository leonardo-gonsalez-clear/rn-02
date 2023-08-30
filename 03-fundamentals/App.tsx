import { StyleSheet, Text, View } from 'react-native';
import Aleatorio from './components/Aleatorio';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';

export default function App() {


  return (
    <View style={styles.container}>
      <Aleatorio min={0} max={10} />
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      <MinMax num1={12} num2={9} />
      <Primeiro />
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
