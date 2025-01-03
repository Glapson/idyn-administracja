const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your Tebex API secret key
const TELEX_API_SECRET = 'UyVqf1adaTNUONw48mNtX8GPG4lPhCOa';

app.use(cors());

app.get('/store-info', async (req, res) => {
    try {
        const response = await axios.get('https://plugin.tebex.io/information', {
            headers: {
                'X-Tebex-Secret': TELEX_API_SECRET
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching store information:', error);
        res.status(500).send('Error fetching store information');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});