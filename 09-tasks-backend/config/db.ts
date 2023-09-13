import config from "../knexfile"
import knex from "knex"

const db = knex(config).migrate.latest()

export default db
