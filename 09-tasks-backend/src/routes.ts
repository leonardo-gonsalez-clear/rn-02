import { Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import "express-async-errors"
import passport from "./config/passport";

const routes = Router()

routes.post("/user", UserController.store)

routes.post("/signin", AuthController.signIn)

export default routes
