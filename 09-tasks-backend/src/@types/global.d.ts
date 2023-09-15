import { Knex } from "knex";
import Express from "express";

interface IUser {
  id: number
  name: string
  email: string
}

interface ITask {
  id: number
  description: string
  doneAt: Date | null
  estimateAt: Date
  userId: number
}

declare global {
  namespace Express {
    interface Locals {
      db: Knex
    }

    interface User extends IUser { }

  }
}
