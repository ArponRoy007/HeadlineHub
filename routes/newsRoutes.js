const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

// TEMP TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Route working");
});

// MAIN ROUTE
router.get("/", newsController.getNews);

module.exports = router;