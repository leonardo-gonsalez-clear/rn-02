import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import users from '../../data/users';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList keyExtractor={({ id }) => String(id)} data={users} renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.avatarUrl, width: 100, height: 100 }} />
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
