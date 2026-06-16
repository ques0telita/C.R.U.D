# C. R. U. D - Sistema de gestion de datos

Este es un proyecto backend desarrollado con **Node.js** y **Express** que implementa un sistema básico de administración de talleres (C.R.U.D) en memoria. Permite listar, agregar, actualizar y eliminar talleres utilizando diferentes métodos y rutas HTTP.

## 🚀 Caracteristicas y rutas (Endpoints) 

La API cuenta con los siguientes endpoints configurados para interactuar con la lista de talleres:

* **GET** `/talleres`: Devuelve la lista completa de todos los talleres disponibles.
* **POST** `/talleres`: Agrega un nuevo taller al listado. Requiere enviar un JSON en el cuerpo (`body`) de la petición con las propiedades: `titulo`, `duracion` y `nivel`.
* **PUT** `/talleres/:id`: Actualiza por completo un taller existente buscando por su ID. Se deben enviar todos los campos en el cuerpo de la petición.
* **PATCH** `/talleres/:id`: Realiza una actualización parcial de un taller. Permite modificar unicamente las propiedades enviadas (por ejemplo, solo cambiar la duracion o el titulo).
* **DELETE** `/talleres/:id`: Elimina un taller de forma definitiva del sistema segun el ID especificado en la URL.

## 🛠️ Tecnologias utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor.
* **Express**: Framework web para la creación de la API y el manejo de rutas HTTP.
* **Insomnia / Postman**: Herramientas utilizadas para realizar las pruebas de las peticiones a los endpoints.

## 💻 Instalacion y uso

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando:
```bash
   npm install
``` 
## Iniciar el servidor en el terminal con el siguiente comando
```Terminal
   node app.js
``` 
