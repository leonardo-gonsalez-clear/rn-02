import { create } from 'zustand'

interface Props {
  user: null | IUser
  setUser: (user: IUser) => void
  logout: () => void
}

const useUserStore = create<Props>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

export default useUserStore
