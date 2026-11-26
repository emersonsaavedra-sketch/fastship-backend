require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const enviosRoutes = require('./routes/envios');

const app = express();
const PORT = process.env.PORT || 3000;

// conexion
conectarDB();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/envios', enviosRoutes);

app.listen(PORT, () => {
  console.log(`🚀 FastShip está corriendo en http://localhost:${PORT}`);
});