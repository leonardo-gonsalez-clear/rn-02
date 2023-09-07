import { create } from 'zustand'
import users from '../data/users'
import { IUser } from '../app/(stacks)/UserForm'

interface IStore {
  data: IUser[]
  setData: (data: IUser[]) => void
}

const useStore = create<IStore>((set) => ({
  data: users,
  setData: (data) => set({ data })
}))


export default useStore
