const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4001;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4002');
    const microservicio2Data = response.data;

    // Diseño básico con HTML y CSS
    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              text-align: center;
              padding: 50px;
            }
            h1 {
              color: #333;
            }
            p {
              color: #666;
            }
          </style>
          <title>Microservicio 1</title>
        </head>
        <body>
          <h1>Microservicio 1</h1>
          <p>Microservicio 2: ${microservicio2Data}</p>
        </body>
      </html>
    `;

    res.send(htmlResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el microservicio 1' });
  }
});

app.listen(PORT, () => {
  console.log(`Microservicio 1 escuchando en el puerto ${PORT}`);
});
