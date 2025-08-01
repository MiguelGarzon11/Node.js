const express = require('express');
const app = express();

// Ruta pricipal
app.get('/', (req, res) => {
    res.send('Primer servidor con Express');
});

// Otra ruta 
app.get('/about', (req, res) => {
    res.send('Esta es la ruta /about');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

