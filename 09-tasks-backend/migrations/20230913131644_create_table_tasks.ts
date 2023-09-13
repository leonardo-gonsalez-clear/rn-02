import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tasks", table => {
    table.increments("id").primary(),
      table.string("description").notNullable(),
      table.datetime("doneAt"),
      table.datetime("estimateAt").notNullable(),
      table.integer("userId")
        .references("id").inTable("users").notNullable()


  })
}


export async function down(knex: Knex): Promise<void> {
}

