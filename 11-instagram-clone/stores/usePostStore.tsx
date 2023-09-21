import { create } from 'zustand'

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
  setPosts: (posts: IPost[]) => void
}

const usePostStore = create<Props>((set) => ({
  posts: posts,
  setPosts: (posts) => set({ posts }),
}))

export default usePostStore
