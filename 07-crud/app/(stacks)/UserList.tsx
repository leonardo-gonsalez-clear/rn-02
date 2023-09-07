import { StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import React from 'react';
import { IUser } from './UserForm';
import useStore from '../../components/useStore';

export default function TabOneScreen() {
  const users = useStore(state => state.data)
  const setUsers = useStore(state => state.setData)
  const router = useRouter()

  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{ gap: 16 }} keyExtractor={({ id }) => String(id)} data={users} renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 8 }}
        >
          <Image source={{ uri: item.avatarUrl, width: 75, height: 75 }} style={{ borderRadius: 8 }} />
          <View style={{ gap: 4, flex: 1 }}>
            <Text>{item.name}</Text>
            <Text style={{ color: "#777" }}>{item.email}</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
            <Button title='E' color={"#00f"} onPress={() => router.push({ pathname: "/(stacks)/UserForm", params: item })} />
            <Button title='D' color={"#f00"} onPress={() => setUsers(users.filter(i => i !== item))} />
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
