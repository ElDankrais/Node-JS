const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const adminRoutes = require('./routes/admin');
const messageRoutes = require('./routes/message');