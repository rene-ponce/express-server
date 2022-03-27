const express = require('express');
const productsRoutes = require('./routes/productsRoutes.js');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/productos', productsRoutes);

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor running on port ${PORT}`));
server.on('error', error => console.log(`Server error ${error}`));