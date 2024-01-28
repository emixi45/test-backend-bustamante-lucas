// Ejercicio 5: Arquitectura del Backend
// Tecnologías:
// ● NodeJS - Base
// ● Express - Enrutado
// ● Sequelize - CRM
// ● bcrypt - Encriptar /Desencriptar información sensible
// ● JWT - Tokenización
// ● Mongodb- Firebase - PostgreSQL - Manejo Base de datos
// Estructura:

// src
// ● Models: Modelado de tablas sequelize-
// ● Controllers: Funciones que maneje conexión de los servicios hacia las rutas.
// ● Services: Conexión de las funciones a la base de datos.
// ● Helpers: Funciones que se necesite reutilizar y simplificar su uso.
// ● Middlewares: Funciones mediadoras como controladoras de privilegios de usuarios
// y correcto envío de información.
// ● Routes: Comunicación de los endpoint de las rutas con los controladores.
// ● Schemas: Modelado de esquema de las propiedades las tablas.
// App.js --> Main de la aplicación
// Patrones de diseño:
// ● Patrón MVC
// ● Patrón Middleware
// ● Patrón de Repositorio