const express = require("express");
const router = express.Router();

const ADMIN_PASSWORD = "kuba"; 


router.post("/login", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.json({ success: true });
  }

  res.status(401).json({ success: false, message: "Neplatné heslo" });
});


router.get("/check-session", (req, res) => {
  res.json({ loggedIn: !!req.session.isAdmin });
});

module.exports = router;
