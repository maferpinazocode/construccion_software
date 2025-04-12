const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Endpoint para recibir dos números y devolver operaciones
app.post('/operaciones', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'num1 y num2 deben ser números' });
  }

  const resultado = {
    suma: num1 + num2,
    resta: num1 - num2,
    multiplicacion: num1 * num2,
    division: num2 !== 0 ? num1 / num2 : 'Error: División por cero'
  };

  res.json(resultado);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
