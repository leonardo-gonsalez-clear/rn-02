import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import users from '../../data/users';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{ gap: 16 }} keyExtractor={({ id }) => String(id)} data={users} renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 8 }}
          onPress={() => router.push({ pathname: "/(stacks)/UserForm", params: { user: item.name } })}
        >
          <Image source={{ uri: item.avatarUrl, width: 75, height: 75 }} style={{ borderRadius: 8 }} />
          <View style={{ gap: 4 }}>
            <Text>{item.name}</Text>
            <Text style={{ color: "#777" }}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
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
