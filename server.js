const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- Add more routes for other modules below --- 
// Example:
// app.get('/blog', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'blog.html'));
// });
// app.get('/projects', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'projects.html'));
// });
// -----------------------------------------------

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
