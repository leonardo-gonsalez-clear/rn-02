import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';


export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Post image={require("../../assets/images/boat.jpg")} />
    </View >
  )
}

