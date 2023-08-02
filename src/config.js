const PORT = 4000;
const HOST = 'http://localhost:' + PORT;

const {config} = require('dotenv');

config();

const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

console.log(PAYPAL_API);
console.log(PAYPAL_API_CLIENT);
console.log(PAYPAL_API_SECRET);

//const PAYPAL_API_KEY = "";

module.exports = {
    PORT,
    HOST,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
    PAYPAL_API
};