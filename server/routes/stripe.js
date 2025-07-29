const express = require('express');
const router = express.Router();
const stripeController = require("../controllers/stripe")

router.get("/config", stripeController.getConfig);

router.post("/create-payment-intent", stripeController.createPaymentIntent);

module.exports = router;
