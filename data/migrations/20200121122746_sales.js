exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl
      .integer("car_id")
      .unsigned()
      .notNullable();
    tbl
      .foreign("car_id")
      .references("id")
      .inTable("cars");
    tbl.text("order_number").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
