import { StyleSheet, View, Text } from 'react-native';
import { MainText } from '../../styles/global';


export default function TabOneScreen() {
  return (
    <View>
      <MainText>Tab One</MainText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
