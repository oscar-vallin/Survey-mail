const keys = require('../config/keys');
const Stripe = require('stripe');
const requireLogin = require('../middlewares/requireLogin');

const stripe = new Stripe(keys.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req, res) => {

       const pay = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            payment_method: req.body.id,
            confirm: true
        });

        console.log(pay)
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
}