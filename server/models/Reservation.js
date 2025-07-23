const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  people: { type: Number, required: true },
  notes: { type: String, required: false }, 
  image: {type: String, required: true},
});

module.exports = mongoose.model('Reservation', reservationSchema);
