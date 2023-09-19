import { create } from "zustand"

interface Props {
  user: IUser | null
  setUser: (user: IUser) => void
}

const useUserStore = create<Props>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

export default useUserStore

