import { NextFunction, Request, Response, Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import "express-async-errors"
import TasksController from "./controllers/TasksController";
import passport from "./config/passport";

const routes = Router()

routes.post("/user", UserController.store)

routes.post("/signin", /* (req, res, next) => passport(req, res, next).authenticate(), */ AuthController.signIn)

routes.get("/tasks", passport.authenticate(), TasksController.index)
routes.post("/tasks", passport.authenticate(), TasksController.store)
routes.put("/tasks/:id", passport.authenticate(), TasksController.updateTask)
routes.patch("/tasks/:id", passport.authenticate(), TasksController.doneTask)
routes.delete("/tasks/:id", passport.authenticate(), TasksController.deleteTask)

export default routes
