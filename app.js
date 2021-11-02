const express = require('express');

const { dirname } = require('path');

const path = require('path');

const app = express();

const publicPath = path.resolve (__dirname, './public');

app.use(express.static(publicPath));


app.listen(3000, () => console.log('Servidor corriendo 3000'));

app.get('/', (req, res) => { res.sendFile(path.resolve (__dirname, './views/slider.html')); });