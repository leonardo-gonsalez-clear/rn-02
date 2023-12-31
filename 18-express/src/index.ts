import Express from "express"
import middleware from "./mid"

const app = Express()

app.use(Express.json())

app.get("/", (req, res) => {
  res.send(`
<h1>Hello World</h1>
<p>My name is <strong>John</strong></p>
`)
})

app.use(middleware)

app.post("/", (req, res) => {
  const { name } = req.body

  res.json(name)
})

app.listen(3000, () => console.log("server is running on port 3000"))
