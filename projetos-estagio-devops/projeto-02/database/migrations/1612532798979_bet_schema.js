'use strict'

const Schema = use('Schema')

class BetSchema extends Schema {
  up () {
    this.create('bets', (table) => {
      table.increments()
      table.string('numbers')
      table.double('price')
        .notNullable()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .notNullable()
      table.integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .notNullable()
      // table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('bets')
  }
}

module.exports = BetSchema
