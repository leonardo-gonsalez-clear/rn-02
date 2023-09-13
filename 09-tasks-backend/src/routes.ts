import { Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import "express-async-errors"

const routes = Router()

routes.post("/user", UserController.store)

routes.post("/signin", AuthController.signIn)

export default routes
