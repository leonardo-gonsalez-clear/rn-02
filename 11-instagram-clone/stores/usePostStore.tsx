import { create } from 'zustand'
import api from '../services/api'
import { db, storage } from '../services/firebase'
import { ref, get, set as setDb } from 'firebase/database'
import { ref as refStorage, uploadString, getDownloadURL } from 'firebase/storage'

const posts: IPost[] = [
  {
    id: 1,
    image: require('../assets/images/fence.jpg'),
    email: "johndoe@gmail.com",
    name: "John Doe",
    avatarUrl: "https://img.freepik.com/fotos-gratis/view-of-adorable-kitten-with-simple-background_23-2150758084.jpg?t=st=1695133228~exp=1695133828~hmac=fc36475e2d4a74fa383c3fa7bc438ce3ef896ecdf5ab0f78a16adf45cbae2734",
    comments: [
      { name: "Joana Elena Silva", comment: "Stunning!" },
      { name: "Rafael Gustavo Pereira", comment: "Foto linda! Onde foi tirada?" }
    ]
  },
  {
    id: 2,
    image: require('../assets/images/bw.jpg'),
    email: "leo@gmail.com",
    avatarUrl: "https://img.freepik.com/fotos-gratis/view-of-adorable-kitten-with-simple-background_23-2150758084.jpg?t=st=1695133228~exp=1695133828~hmac=fc36475e2d4a74fa383c3fa7bc438ce3ef896ecdf5ab0f78a16adf45cbae2734",
    name: "Leonardo",
    comments: [
    ]
  }
]

interface Props {
  posts: IPost[]
  setPosts: (posts: IPost[]) => Promise<void>
  getPosts: () => void
  addComment: (comment: IComment, postId: number) => void
}

const usePostStore = create<Props>((set) => ({
  posts: [],
  setPosts: async (posts) => {
    await setDb(ref(db, "posts"), posts)
    set({ posts })
  },
  getPosts: async () => {
    const posts = await get(ref(db, "posts")).then((snapshot) => snapshot.val())
    set({ posts })
  },
  addComment: (comment: IComment, postId: number) => {
    const post = posts.find(post => post.id === postId)
    console.log(post)

    const newPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] }
      } else {
        return post
      }
    })

    set({ posts: newPosts })
  }

}))

export default usePostStore
