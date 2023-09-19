interface ITask {
  id: number | string
  description: string
  estimateAt: Date
  doneAt?: Date | null
}

interface IUser {
  id: number | string
  name: string
  email: string

}

declare module "*.jpg" {
  const value: string;
  export default value;
}

