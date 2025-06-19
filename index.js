const express = require('express');
const app = express();
require('dotenv').config();
const usersRouter = require('./routes/users');

const pool = require('./db');

(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      )
    `);
    console.log("✅ Users table is ready");
  } catch (err) {
    console.error("❌ Error creating users table:", err.message);
  }
})();


app.use(express.json());
app.use(usersRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is runing on port ${process.env.PORT}`);
})