const mongoose = require('mongoose');

const EnvioSchema = new mongoose.Schema({
  idPedido: {
    type: String,
    required: [true, 'El ID del pedido es obligatorio'],
    unique: true,
    trim: true
  },
  remitente: {
    type: String,
    required: [true, 'El remitente es obligatorio'],
    trim: true
  },
  destinatario: {
    type: String,
    required: [true, 'El destinatario es obligatorio'],
    trim: true
  },
  direccionEntrega: {
    type: String,
    required: [true, 'La dirección de entrega es obligatoria'],
    trim: true
  },
  estado: {
    type: String,
    enum: {
      values: ['pendiente', 'en tránsito', 'entregado'],
      message: '{VALUE} estado ingresado no es válido'
    },
    default: 'pendiente'
  }
}, {
  timestamps: true // Agrega fecha de creación y actualización automáticamente
});

module.exports = mongoose.model('Envio', EnvioSchema);