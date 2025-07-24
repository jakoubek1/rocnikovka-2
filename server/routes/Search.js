const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const Reservation = require('../models/Reservation');


router.get('/', async (req, res) => {
  const query = req.query.q;

  if (!query || query.length < 2) {
    return res.json({ payload: [] }); 
  }

  try {
    
    const items = await Item.find({
      name: { $regex: query, $options: 'i' }
    }).limit(10);

    
    const reservations = await Reservation.find({
      trainerName: { $regex: query, $options: 'i' }
    }).limit(10);

    const results = [
      ...items.map(i => ({ ...i.toObject(), type: 'item' })),
      ...reservations.map(r => ({ ...r.toObject(), type: 'reservation' })),
    ];

    res.json({ payload: results });
  } catch (err) {
    console.error('Chyba při vyhledávání:', err);
    res.status(500).json({ message: 'Chyba serveru při vyhledávání' });
  }
});

module.exports = router;
