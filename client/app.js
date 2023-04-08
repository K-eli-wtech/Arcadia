const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.CLIENT_PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Client server running at http://localhost:${PORT}`);
});
