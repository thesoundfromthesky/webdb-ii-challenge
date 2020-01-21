exports.seed = function(knex) {
  return knex("cars")
    .truncate()
    .then(function() {
      return knex("cars").insert([
        {
          vin: "vin1esddsfsdf",
          make: "BMW",
          model: "i5",
          mileage: 123321.2,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: "sadfdf4sddsfsdf",
          make: "Toyota",
          model: "Camry",
          mileage: 8196.5,
          transmission: "manual",
          title: "clean"
        },
        {
          vin: "dfsafddfs",
          make: "Honda",
          model: "Civic",
          mileage: 48218,
          transmission: "auto",
          title: "clean"
        }
      ]);
    });
};
