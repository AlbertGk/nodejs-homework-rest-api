const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/usersAuth");
const { ctrlWrapper } = require("../../utils");
const { auth, upload, resize } = require("../../middlewares");

router.post("/signup", ctrlWrapper(ctrl.register));

router.post("/login", ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.listCurrent));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  resize,
  ctrlWrapper(ctrl.setAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", ctrlWrapper(ctrl.resendVerifyEmail));

module.exports = router;
