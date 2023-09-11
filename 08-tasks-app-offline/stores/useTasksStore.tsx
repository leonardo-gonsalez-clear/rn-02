import { create } from 'zustand'

const data: ITask[] = [
  {
    id: Math.random(),
    title: 'Fazer mudança',
    doneAt: new Date(),
    estimateAt: new Date()
  },
  {
    id: Math.random(),
    title: 'Faxina',
    estimateAt: new Date()
  }
]

interface ITasksStore {
  tasks: ITask[]
  setTasks: (tasks: ITask[]) => void
}

const useTasksStore = create<ITasksStore>((set) => ({
  tasks: data,
  setTasks: (tasks) => set({ tasks }),
}))

export default useTasksStore

