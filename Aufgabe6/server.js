const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');

const app = express();

const pool = new Pool({
  host: "html-openshift-app",
  port: 8080,
  user: "admin",
  password: "123123",
  database: "database"
});

app.get('/api/card-profile', authenticateToken, async (req, res) => {
    try {
        const query = `
        SELECT *
        FROM database;
        `;
        const { rows } = await pool.query(query, [current_user]);
        if (rows.length === 0) return res.status(404).json({error: "No new profiles left!"})
            res.json(rows[0]); // Sends the data object to React
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

console.log("backend backend backend")

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
