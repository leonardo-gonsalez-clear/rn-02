import { create } from 'zustand'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../services/firebase'
import { set as setDb, ref } from 'firebase/database'

interface Props {
  user: null | IUser
  createUser: (name: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  setUser: (user: IUser) => void
  logout: () => void
}

const useUserStore = create<Props>((set) => ({
  user: null,
  createUser: async (name, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const { user } = credentials
        return user
      })

    const userData = {
      email: email,
      name: name,
      avatarUrl: user.photoURL || "",
    }

    setDb(ref(db, `users/${user.uid}`), userData)

    set({
      user: userData,
    })
  },
  signIn: async (email, password) => {

  },
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

export default useUserStore
