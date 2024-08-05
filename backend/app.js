const express = require('express');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/reports', reportRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
