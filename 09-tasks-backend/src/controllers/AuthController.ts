import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

class AuthController {

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body
    const secret = process.env.AUTH_SECRET
    const db = req.app.locals.db


    if (!email || !password) return res.status(400).json({ error: "missing params" })
    const user = await db("users")
      .whereILike("email", email)
      .first()

    if (!user) return res.status(404).json({ error: "user not found" })

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) return res.status(401).json({ error: "invalid credentials" })

    const token = jwt.sign({ id: user.id }, secret as string, { expiresIn: '1d' })

    return res.status(200).json({ token, name: user.name, email })

  }
}

export default new AuthController()
