const express = require('express');
const router = express.Router();
const envioControllers = require('../controllers/envioControllers');

router.post('/', envioControllers.crearEnvio);
router.get('/', envioControllers.obtenerEnvios);
router.get('/:id', envioControllers.obtenerEnvioPorId);
router.put('/:id', envioControllers.actualizarEstadoEnvio);
router.delete('/:id', envioControllers.eliminarEnvio);

module.exports = router;