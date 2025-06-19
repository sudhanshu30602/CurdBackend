// routes/users.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create user
router.post('/create', async (req, res) => {
  const { name, email} = req.body;
  const result = await pool.query(
    'Insert into users (name, email) values ($1, $2) returning *',
    [name, email]
  );
  res.json(result.rows[0]);
})

// Read all users
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

// Read one user
router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

// Update user
router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, req.params.id]
  );
  res.json(result.rows[0]);
});

// Delete user
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
  res.send('User deleted');
});

module.exports = router;
