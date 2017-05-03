const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.use('/assets', express.static(path.resolve(__dirname, './public/assets')));
app.use('/dev', express.static(path.resolve(__dirname, './dev')));

app.listen(3000, () => {
    console.log('React app listening on port 3000!')
});