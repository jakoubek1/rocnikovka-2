const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const Reservation = require("../models/Reservation");

router.get("/", async (req, res) => {
  const { q } = req.query;
  if (!q || q.length < 2) return res.json({ payload: [] });

  const regex = new RegExp(q, "i"); 

  try {
    const [items, reservations] = await Promise.all([
      Item.find({ name: regex }).limit(5).lean(),
      Reservation.find({ name: regex }).limit(5).lean(),
    ]);

    const formattedItems = items.map((item) => ({
      _id: item._id,
      name: item.name,
      type: "item",
    }));

    const formattedReservations = reservations.map((res) => ({
      _id: res._id,
      name: res.name,
      type: "reservation",
    }));

    res.json({ payload: [...formattedItems, ...formattedReservations] });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;
