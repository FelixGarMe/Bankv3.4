const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;

app.set('view engine', 'ejs');

// Rutas para las páginas HTML
app.get('/', (req, res) => {
    res.render('layout', { view: 'home' });
});

app.get('/divisa', (req, res) => {
    res.render('layout', { view: 'divisa' });
});

app.get('/ingresos', (req, res) => {
    res.render('layout', { view: 'ingresos' });
});

// Ruta para la API de tasas de cambio de divisas (simulada)
app.get('/api/divisas', (req, res) => {
    // Datos simulados
    const tasasDeCambio = {
        USD: 1.0,
        EUR: faker.random.number({ min: 0.7, max: 1.5 }),
        GBP: faker.random.number({ min: 0.6, max: 0.9 }),
        JPY: faker.random.number({ min: 100, max: 150 }),
        AUD: faker.random.number({ min: 1.2, max: 1.5 })
        // Agrega más divisas según sea necesario
    };

    res.json(tasasDeCambio);
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
