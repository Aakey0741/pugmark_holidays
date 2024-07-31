const express = require("express");
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const endpoints = require('./routes/endPoints');
const port = process.env.PORT || '4000';
require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the path to your external directory
const frontendPath = path.join('/Users/harshjoshi/Downloads/pugmark website/frontend');

// Serve static files from the external directory
app.use(express.static('public'));

// Serve index.html for the root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(frontendPath, 'index.html'));
// });

app.use(cors());
// app.get('/', async (req, res) => {
//     return res.json({ status: 1, message: 'Working proper....!' });
// });

endpoints(app);

var server = http.createServer(app);

server.listen(port, () => {
  console.log(`Running on Port : ${port}`);
});