const { Client } = require('pg');

const { DATABASE_URL } = process.env;

const client = new Client({
  // user: "postgres",
  // host: "localhost",
  // database: "ecommerce",
  // password: "password",
  // port: 5432,
  connectionString: DATABASE_URL,
  database: "graceshopper"
})
  
module.exports = client
