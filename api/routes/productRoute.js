const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(20).json({
    message: "get all products",
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "create a product",
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  if (id === "special") {
    res.status(200).json({
      message: "ID is special",
      id: id,
    });
  } else {
    res.status(400).json({
      message: "found an ID",
    });
  }
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: `update product with id ${id}`,
  });
});

module.exports = router;
