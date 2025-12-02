'use strict';

const express = require('express');
const app = express();

/**
 * GET /math/circle/:r
 * Responds with JSON: { "area": ..., "circumference": ... }
 */
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);

  if (isNaN(r)) {
    // Optional: handle invalid radius
    res.type('text').status(400).send('Error: radius must be a number');
    return;
  }

  const area = Math.PI * r * r;
  const circumference = Math.PI * 2 * r;

  res.type('json').json({
    area: area,
    circumference: circumference
  });
});

/**
 * GET /hello/name?first=...&last=...
 * Success: "Hello firstName lastName"
 * Error: 400 with "Missing Required GET parameters: ..."
 */
app.get('/hello/name', (req, res) => {
  const first = req.query.first;
  const last = req.query.last;

  const missing = [];
  if (!first) missing.push('first');
  if (!last) missing.push('last');

  if (missing.length > 0) {
    res
      .type('text')
      .status(400)
      .send('Missing Required GET parameters: ' + missing.join(', '));
  } else {
    res.type('text').send(`Hello ${first} ${last}`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
