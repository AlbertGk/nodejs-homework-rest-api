const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/usersAuth");
const { ctrlWrapper } = require("../../utils");

router.post("/signup", ctrlWrapper(ctrl.register));

router.post("/login", ctrlWrapper(ctrl.login));

// router.post("/logout", ctrlWrapper(ctrl.registerUser));

// router.post("/current", ctrlWrapper(ctrl.registerUser));

module.exports = router;
