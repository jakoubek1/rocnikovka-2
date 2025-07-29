const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-06-30.basil",
});

exports.getConfig = async (req, res, next) => {
  try {
    res.send({
      publishableKey: process.env.STRIPE_PUBLIC_KEY,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

exports.createPaymentIntent = async (req, res, next) => {
  try {
    console.log(Math.round(req.body.price * 100));
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "CZK",
      amount: Math.round(req.body.price * 100),
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
