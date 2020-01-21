const express = require("express");
const carsRouter = require("./cars");

const server = express();
const port = process.env.PORT || 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/cars", carsRouter);

server.listen(port, () => {
  console.log(`Server on Port: ${port}`);
});
