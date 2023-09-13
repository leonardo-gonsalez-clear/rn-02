import { Knex } from "knex";
import Express from "express";

declare global {
  namespace Express {
    interface Locals {
      db: Knex
    }
  }
}
