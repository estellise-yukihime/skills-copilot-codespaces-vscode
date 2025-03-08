// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Create a route
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Create a route
app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});
