// db.js
const { Pool } = require('pg');
require('dotenv').config();

let pool;
try{
  pool = new Pool({ connectionString: process.env.POSTGRE_SQL,
  ssl: {
    rejectUnauthorized: false, // for Render's SSL
  },
});
  pool.connect()
    .then(() => {
      console.log('✅ Connected to PostgreSQL database');
    })
    .catch((err) => {
      console.error('❌ Connection error:', err.stack);
    });
} catch (error) {
    console.log(error);
}



module.exports = pool;
