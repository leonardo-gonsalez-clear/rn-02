import { StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import { Text, View } from '../../components/Themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import useStore from '../../components/useStore';

export type IUser = {
  name: string
  email: string
  avatarUrl: string
  id: string
}

export default function TabTwoScreen() {
  const users = useStore(state => state.data)
  const setData = useStore(s => s.setData)
  const user = useLocalSearchParams<IUser>()
  const [currentUser, setCurrentUser] = React.useState<IUser>(user)
  const router = useRouter()

  const handleSave = () => {

    const removedUser = users.filter(u => Number(u.id) !== Number(user.id))
    setData([...removedUser, user.id
      ? currentUser
      : { ...currentUser, id: String(users.length + 1) }])

    router.back()
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <Text>Nome</Text>
          <TextInput
            style={styles.input}
            value={currentUser.name}
            placeholder={user.name}
            onChangeText={name => setCurrentUser(prev => ({ ...prev, name }))} />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput style={styles.input} value={currentUser.email} placeholder={user.email} onChangeText={email => setCurrentUser((prev) => ({ ...prev, email }))} />
        </View>
        <View>
          <Text>Foto de perfil</Text>
          <TextInput style={styles.input} value={currentUser.avatarUrl} placeholder={user.avatarUrl} onChangeText={url => setCurrentUser((prev) => ({ ...prev, avatarUrl: url }))} />
        </View>

        <Button title='Salvar' onPress={handleSave} />
      </View>

      <View style={styles.content}>
        <Image source={{ uri: currentUser?.avatarUrl, width: 100, height: 100 }} />
        <Text style={styles.title}>{currentUser?.name}</Text>
        <Text style={styles.title}>{currentUser?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 8
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    borderRadius: 4
  },
  inputContainer: {
    gap: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    alignItems: "center",
    marginTop: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
