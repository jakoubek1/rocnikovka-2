const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/Reservation');


router.get('/', reservationController.getAllReservation);

router.get('/:id', reservationController.getReservationById);

router.post('/', reservationController.createReservation);

router.put('/:id', reservationController.updateReservation);

router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
