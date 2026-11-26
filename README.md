# FastShip API - Gestión de Envíos (Backend MEAN)

Backend desarrollado con **Node.js, Express y MongoDB (Mongoose)** para la startup **FastShip**, permitiendo registrar, consultar, rastrear y actualizar el estado de envíos en tiempo real mediante una arquitectura REST modular.

---

## Requisitos Previos
* [Node.js](https://nodejs.org/) (v18 o superior)
* Cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas) o instalación local de MongoDB
* [Postman](https://www.postman.com/) o Insomnia para pruebas de endpoints

---

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/fastship-backend.git](https://github.com/TU_USUARIO/fastship-backend.git)
   cd fastship-backend


npm install

## Argumentación 

Se utiliza el modelo documental con Mongoose porque permite el envio de documento JSON y nos ayuda a realizar consultas rápidas. El esquema que garantiza la validación correcta es Unique:true en idPedido evitando que se repitan y enum para colocar el estado en 3 tipos de estados.

El uso ruta se dividieron por carpetas para tener una estructura ordenada esto mantiene el código modular y legible.

Se uso el Try/Catch colocado en bloques para las consultas y devolver estados semanticos por códigos (201 al crear, 200 en consultas y actualizaciones, 400 por error de validación, 404 documentos no existentes, 500 para fallos del servidor).

## Conclusiones

Uno de los mayores retos, que consumio mucho tiempo es la implementación de express con mongoose para asegurar restricciones, validaciones y evitar caídas inesperadas del servidor antes peticiones mal estructuradas.

