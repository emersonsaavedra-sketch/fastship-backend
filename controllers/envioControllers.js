const Envio = require('../models/envio');

// registro de envíos 
exports.crearEnvio = async (req, res) => {
  try {
    const nuevoEnvio = new Envio(req.body);
    const envioGuardado = await nuevoEnvio.save();
    res.status(201).json({
      mensaje: 'Envío registrado con éxito',
      data: envioGuardado
    });
  } catch (error) {
    // Error por ID duplicado o validación 
    res.status(400).json({
      mensaje: 'Error al registrar el envío',
      error: error.message
    });
  }
};

// 2. Consulta de envíos  
exports.obtenerEnvios = async (req, res) => {
  try {
    // filtra los que no están entregados
    const filtro = req.query.activos === 'true' 
      ? { estado: { $in: ['pendiente', 'en tránsito'] } } 
      : {};
      
    const envios = await Envio.find(filtro);
    res.status(200).json(envios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los envíos', error: error.message });
  }
};

// 3. Buscar envío por ID 
exports.obtenerEnvioPorId = async (req, res) => {
  try {
    const envio = await Envio.findById(req.params.id);
    if (!envio) {
      return res.status(404).json({ mensaje: 'Envío no encontrado' });
    }
    res.status(200).json(envio);
  } catch (error) {
    res.status(400).json({ mensaje: 'ID inválido o error en la búsqueda', error: error.message });
  }
};

// 4. Actualizamos el estado del envío
exports.actualizarEstadoEnvio = async (req, res) => {
  try {
    const { estado } = req.body;
    const envioActualizado = await Envio.findByIdAndUpdate(
      req.params.id,
      { estado },
      { new: true, runValidators: true } 
    );

    if (!envioActualizado) {
      return res.status(404).json({ mensaje: 'Envío no encontrado' });
    }

    res.status(200).json({
      mensaje: 'Estado actualizado correctamente',
      data: envioActualizado
    });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el estado', error: error.message });
  }
};

// 5. Eliminar un envío
exports.eliminarEnvio = async (req, res) => {
  try {
    const envioEliminado = await Envio.findByIdAndDelete(req.params.id);
    if (!envioEliminado) {
      return res.status(404).json({ mensaje: 'Envío no encontrado' });
    }
    res.status(200).json({ mensaje: 'Envío eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar el envío', error: error.message });
  }
};