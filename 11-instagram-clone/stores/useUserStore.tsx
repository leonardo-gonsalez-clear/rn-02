import { create } from 'zustand'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../services/firebase'
import { set as setDb, get as getDb, ref } from 'firebase/database'

interface Props {
  user: null | IUser
  createUser: (name: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  setUser: (user: IUser) => void
  loading: boolean
  logout: () => void
}

const useUserStore = create<Props>((set) => ({
  user: null,
  createUser: async (name, email, password) => {
    set({ loading: true })
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => cred.user)

    const userData = {
      email: email,
      name: name,
      avatarUrl: user.photoURL || "",
    }

    setDb(ref(db, `users/${user.uid}`), userData)

    set({
      user: userData,
    })
    set({ loading: false })
  },
  signIn: async (email, password) => {
    set({ loading: true })
    const user = await signInWithEmailAndPassword(auth, email, password).then(cred => cred.user)

    const userFromDb = await getDb(ref(db, `users/${user.uid}`)).then((snapshot) => snapshot.val())

    const userData = {
      email,
      name: userFromDb.name,
      avatarUrl: user.photoURL || "",
    }

    set({ user: userData })
    set({ loading: false })
  },
  loading: false,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

export default useUserStore
