import knex from "knex"
import config from "../knexfile"

const db = knex(config).migrate.latest()

const db2 = knex(config)

export { db as default, db2 }
