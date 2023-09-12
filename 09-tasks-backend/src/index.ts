import Express from "express";
import cors from "cors";
import routes from "./routes";

const app = Express();

app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use(routes)

app.get("/", (req, res) => {
  res.json({ message: "Root route" })
})

app.listen(3000, () => {
  console.log("Server is running");
})
