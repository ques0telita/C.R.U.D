# C. R. U. D - Sistema de gestion de datos

Proyecto backend desarrollado con **Node.js** y **Express** que implementa un sistema de administracion de datos (C.R.U.D). Permite ver, agregar, actualizar y eliminar talleres utilizando diferentes metodos y rutas HTTP.

## 🚀 Caracteristicas y rutas (Endpoints) 

La API cuenta con los siguientes endpoints configurados para interactuar con la lista de talleres:

* **GET** `/talleres`: Devuelve la lista completa de todos los talleres disponibles.
* **POST** `/talleres`: Agrega un nuevo taller al listado. Requiere enviar un JSON en el cuerpo (`body`) de la petición con las propiedades: `titulo`, `duracion` y `nivel`.
* **PUT** `/talleres/:id`: Actualiza por completo un taller existente buscando por su ID.
* **PATCH** `/talleres/:id`: Realiza una actualización parcial de un taller.
* **DELETE** `/talleres/:id`: Elimina un taller de forma definitiva del sistema segun el ID.

## 🛠️ Tecnologias utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor.
* **Express**: Framework web para la creación de la API y el manejo de rutas HTTP.
* **Insomnia**: Herramientas utilizadas para realizar las pruebas de las peticiones a los endpoints.

## 💻 Instalacion y uso

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando:
```bash
   npm install
``` 
## Iniciar el servidor en el terminal
```Terminal
   node app.js
``` 
