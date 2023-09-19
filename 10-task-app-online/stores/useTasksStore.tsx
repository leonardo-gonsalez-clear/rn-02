import { create } from 'zustand'

interface ITasksStore {
  tasks: ITask[]
  setTasks: (tasks: ITask[]) => void
}

const useTasksStore = create<ITasksStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}))

export default useTasksStore

