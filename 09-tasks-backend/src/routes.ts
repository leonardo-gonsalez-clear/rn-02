import { Router } from "express";

const routes = Router()

routes.get("/hello", (req, res) => {
  res.json({ message: "Hello World" })
})


export default routes
