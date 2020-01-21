exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("sales")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("sales").insert([
        { car_id: 2, order_number: "order1" },
      ]);
    });
};
