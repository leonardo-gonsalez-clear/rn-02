import { Request, Response } from 'express'
import { Knex } from 'knex'
import bcrypt from "bcrypt"

class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body
    const db = req.app.locals.db

    const hashedPassword = await bcrypt.hash(password, 10)

    return db("users")
      .insert({ name, email, password: hashedPassword })
      .then(() => res.sendStatus(204))
      .catch(e => res.status(400).json(e))
  }
}

export default new UserController()
