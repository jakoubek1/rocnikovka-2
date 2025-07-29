const express = require("express");
const router = express.Router();
const Order = require("../models/order");


router.post("/create", async (req, res) => {
  try {
    const { customerName, email, items, total } = req.body;
    const newOrder = new Order({ customerName, email, items, total, status: "čeká na platbu" });
    await newOrder.save();
    res.status(201).json({ message: "Objednávka uložena", orderId: newOrder._id });
  } catch (err) {
    res.status(500).json({ error: "Chyba při ukládání objednávky" });
  }
});


router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Chyba při načítání objednávek" });
  }
});

module.exports = router;
