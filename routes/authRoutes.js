const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/login", (req, res) => res.render("auth/login"));
router.get("/signup", (req, res) => res.render("auth/signup"));

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;