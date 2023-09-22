import { create } from 'zustand'
import { db, storage } from '../services/firebase'
import { ref, get as getDb, set as setDb } from 'firebase/database'

interface Props {
  posts: IPost[]
  setPosts: (posts: IPost[]) => Promise<void>
  getPosts: () => void
  addComment: (comment: IComment, postId: number) => void
}

const usePostStore = create<Props>((set, get) => ({
  posts: [],
  setPosts: async (posts) => {
    await setDb(ref(db, "posts"), posts)
    set({ posts })
  },
  getPosts: async () => {
    const posts = await getDb(ref(db, "posts")).then((snapshot) => snapshot.val())
    set({ posts })
  },
  addComment: (comment: IComment, postId: number) => {
    const posts = get().posts
    const post = posts.find(post => post.id === postId)

    if (!post) return console.log("Post not found")

    const newPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] }
      } else {
        console.log(posts)
        return post || {}
      }
    })

    set({ posts: newPosts })
  }

}))

export default usePostStore
