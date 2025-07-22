const express = require("express");
const router = express.Router();

const ADMIN_PASSWORD = "kuba";

router.post("/login", (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Neplatné heslo" });
});


module.exports = router;
