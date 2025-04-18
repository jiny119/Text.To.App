const express = require('express');
const app = express();

// Frontend serve karega
app.use(express.static('public'));

// APK Generation Route (Demo)
app.post('/generate-apk', (req, res) => {
  res.json({ 
    status: "Success!", 
    apkUrl: "https://your-link.com/app.apk" 
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
