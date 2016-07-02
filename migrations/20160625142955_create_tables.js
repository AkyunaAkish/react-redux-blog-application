'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments();
    table.string('author');
    table.string('topic');
    table.string('content', 1000);
    table.string('image_url');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs');
};
