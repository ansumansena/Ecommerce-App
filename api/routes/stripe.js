const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51M6yZBSFADHBhWn7tucVyC9tlRj6V4Yg575HhThFCZO4E6U7zvf5xnxPEWW5xmU9Tqrr0t5vbhHeVwmKFcTX48HD00Ovj9xb6m"
);

router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

// const YOUR_DOMAIN = "http://localhost:5000/api/checkout";

// router.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "{{PRICE_ID}}",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });
