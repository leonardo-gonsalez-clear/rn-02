import Express from "express";
import cors from "cors";
import routes from "./routes";
import { db2 } from "./config/db";
import "dotenv/config"
import "reflect-metadata"
import passport from "passport";

const app = Express();

app.use(cors({ origin: "*" }))
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(passport.initialize())

app.use((req, res, next) => {
  req.app.locals.db = db2
  next()
})

app.use(routes)

app.get("/", (req, res) => {
  res.json({ message: "Root route" })
})

app.listen(3000, () => {
  console.log("🔥 Server is running on http://localhost:3000");
})
