import { StyleSheet, Text, View } from 'react-native';
import Aleatorio from './components/Aleatorio';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Familia from './components/relacao/Familia';
import Filho from './components/relacao/Filho';
import UserLogged from './components/UserLogged';
import ProdutoLista from './components/produtos/ProdutoLista';
import ProdutoListaV2 from './components/produtos/ProdutoListaV2';
import TypeYourName from './components/TypeYourName';
import Mega from './components/mega/Mega';


export default function App() {


  return (
    <View style={styles.container}>
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <Aleatorio min={0} max={10} /> */}
      {/* <MinMax num1={12} num2={9} /> */}
      {/* <Primeiro /> */}

      {/* <Titulo title='Loja' subtitle='Bem-vindo à loja!' /> */}
      {/* <Botao /> */}
      {/* <Contador /> */}
      {/* <Contador passo={10} inicial={10} /> */}
      {/* <Pai /> */}

      {/* <ContadorV2 /> */}

      {/* <Familia> */}
      {/*   <Filho nome='Bia' sobrenome='Arruda' /> */}
      {/*   <Filho nome='Carlos' sobrenome='Arruda' /> */}
      {/* </Familia> */}

      {/* <UserLogged name='leonardo' email='teste@teste.com' /> */}

      {/* <ProdutoLista /> */}
      {/* <ProdutoListaV2 /> */}

      {/*<TypeYourName /> */}

      <Mega qtdNumeros={"10"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"

  },
});
