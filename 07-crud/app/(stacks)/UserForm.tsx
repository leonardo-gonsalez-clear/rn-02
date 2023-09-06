import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import users from '../../data/users';

export default function TabTwoScreen() {
  const { user } = useLocalSearchParams()
  const userData = useMemo(() => {
    return users.find(u => u.name === user)
  }, [user])

  console.log(userData)

  return (
    <View style={styles.container}>
      <Image source={{ uri: userData?.avatarUrl, width: 100, height: 100 }} />
      <Text style={styles.title}>{userData?.name}</Text>
      <Text style={styles.title}>{userData?.email}</Text>
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
