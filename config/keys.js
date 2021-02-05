
require('dotenv').config()
dbPassword = process.env.DB_HOST;

module.exports = {
    mongoURI: dbPassword
};
