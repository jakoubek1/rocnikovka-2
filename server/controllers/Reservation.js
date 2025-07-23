const Reservation = require('../models/Reservation');

exports.getAllReservation = async (req, res, next) => {
  try {
    const data = await Reservation.find();
    if (data && data.length !== 0) {
      return res.status(200).json({
        message: 'Reservations found',
        payload: data,
      });
    }
    return res.status(404).json({
      message: 'Reservations not found',
      payload: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message || err,
    });
  }
};

exports.getReservationById = async (req, res, next) => {
  try {
    const data = await Reservation.findById(req.params.id);
    if (data) {
      return res.status(200).json({
        message: 'Reservation found',
        payload: data,
      });
    }
    return res.status(404).json({
      message: 'Reservation not found',
      payload: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message || err,
    });
  }
};

exports.createReservation = async (req, res, next) => {
  try {
    const data = new Reservation({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      people: req.body.people,
      notes: req.body.notes,
      image: req.body.image,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).json({
        message: 'Reservation created',
        payload: result,
      });
    }
    return res.status(500).json({
      message: 'Reservation not created',
      payload: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message || err,
    });
  }
};

exports.updateReservation = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      people: req.body.people,
      notes: req.body.notes,
      image: req.body.image,
    };
    const result = await Reservation.findByIdAndUpdate(req.params.id, data, { new: true });
    if (result) {
      return res.status(200).json({
        message: 'Reservation updated',
        payload: result,
      });
    }
    return res.status(404).json({
      message: 'Reservation not found',
      payload: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message || err,
    });
  }
};

exports.deleteReservation = async (req, res, next) => {
  try {
    const result = await Reservation.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({
        message: 'Reservation deleted',
        payload: result,
      });
    }
    return res.status(404).json({
      message: 'Reservation not found',
      payload: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error',
      error: err.message || err,
    });
  }
};
