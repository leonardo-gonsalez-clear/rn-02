import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"

interface Props {
  user: IUser | null
  setUser: (user: IUser) => void
  logOut: () => void
}

const useUserStore = create<Props>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logOut: async () => {
    await AsyncStorage.removeItem("token")
    set({ user: null })
  }
}))

export default useUserStore

