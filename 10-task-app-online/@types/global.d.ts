interface ITask {
  id: number | string
  description: string
  estimateAt: Date
  doneAt?: Date | null
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

