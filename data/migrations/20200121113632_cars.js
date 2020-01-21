// - The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.),
// but this information is not always immediately known.

exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("vin")
      .unique()
      .notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.text("transmission");
    tbl.text("title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
