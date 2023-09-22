import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Post from '../../components/Post/Post'
import usePostStore from '../../stores/usePostStore'



const Feed = () => {
  const posts = usePostStore(state => state.posts)
  const getPosts = usePostStore(state => state.getPosts)

  React.useEffect(() => {
    getPosts()
  }, [])

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Post {...item} />
        )}
      />
    </View>
  )
}

export default Feed 
