const express = require("express");
const db = require("./data/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch {
    internalError(res);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await db("cars").where({ id });
    res.status(200).json(car);
  } catch {
    internalError(res);
  }
});

router.post("/", async (req, res) => {
  try {
    const car = await db("cars").insert(req.body);
    res.status(201).json(car);
  } catch {
    internalError(res);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await db("cars")
      .where({ id })
      .update(req.body);
    res.status(200).json(car);
  } catch {
    internalError(res);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await db("cars")
      .where({ id })
      .del();
    res.sendStatus(204);
  } catch {
    internalError(res);
  }
});

function internalError(res) {
  res.status(500).json({ error: "Internal Error" });
}
module.exports = router;
