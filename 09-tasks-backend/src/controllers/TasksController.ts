import { Request, Response } from 'express'
import { endOfDay } from "date-fns"
import { db2 } from '../config/db'
import { ITask } from 'src/@types/global'

class TasksController {
  async index(req: Request, res: Response) {
    console.log(req.user)
    if (!req.user) return res.status(401).json({ error: "unauthorized" })

    const date = req.query.date
      ? req.query.date
      : endOfDay(new Date())

    const tasks: ITask[] = await db2("tasks")
      .where("userId", req.user.id)
      .where("estimateAt", "<=", date)
      .orderBy("estimateAt")

    return res.json(tasks)
  }

  async store(req: Request, res: Response) {
    const { description, estimateAt } = req.body

    if (!req.user) return res.status(401).json({ error: "unauthorized" })

    if (!description.trim()) return res.status(400).json({ error: "description field is missing" })

    const date = estimateAt
      ? estimateAt
      : endOfDay(new Date())

    const newTask = {
      description,
      estimateAt: date,
      userId: req.user.id
    }

    const task = await db2("tasks")
      .insert(newTask)
      .returning("*")

    return res.status(200).json(task)
  }

  async updateTask(req: Request, res: Response) {
    const { description, estimateAt } = req.body
    const { id } = req.params

    if (!req.user) return res.status(401).json({ error: "unauthorized" })

    const updatedTask = await db2("tasks")
      .where({ id, userId: req.user.id })
      .update({ description, estimateAt })
      .returning("*")

    return res.status(200).json(updatedTask)
  }

  async doneTask(req: Request, res: Response) {
    const { id } = req.params

    if (!req.user) return res.status(401).json({ error: "unauthorized" })

    const task: ITask = await db2("tasks").where({ id, userId: req.user.id }).first()

    if (!task) return res.status(400).json({ error: "task not found" })

    const doneTask = await db2("tasks")
      .where({ id, userId: req.user.id })
      .update({ doneAt: task.doneAt ? null : new Date() })
      .returning("*")

    return res.status(200).json(doneTask)
  }
}

export default new TasksController()
