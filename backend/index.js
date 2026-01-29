const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve APK downloads if they are not in the frontend build (optional fallback)
// app.use('/download', express.static(path.join(__dirname, 'public/download')));

// Route to handle all other requests and serve index.html (SPA support)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
