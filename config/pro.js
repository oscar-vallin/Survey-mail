//production keys here
//dev.js do not commit this
module.exports = {
    clientGoogleID: process.env.GOOGLE_CLIENT_ID,
    clientGoogleSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGODB_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN,
}