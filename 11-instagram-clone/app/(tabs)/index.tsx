import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';


export default function TabOneScreen() {
  const user = {
    name: "Leonardo",
    avatar: "https://img.freepik.com/fotos-gratis/view-of-adorable-kitten-with-simple-background_23-2150758084.jpg?t=st=1695133228~exp=1695133828~hmac=fc36475e2d4a74fa383c3fa7bc438ce3ef896ecdf5ab0f78a16adf45cbae2734"
  }

  const comments: IComment[] = [
    {
      name: "lucas", comment: "foto muito bonita!! continue assim",
    },
    {
      name: "carlos", comment: "acredito que você pode fazer melhor.",
    }
  ]

  return (
    <View style={{ flex: 1 }}>
      <Post
        image={require("../../assets/images/boat.jpg")}
        user={user}
        comments={comments}
      />
    </View >
  )
}

