const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('ZAR Investment Backend Running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
