# C. R. U. D - Sistema de gestión de talleres

Este proyecto es una API REST funcional y simplificada construida con **Node.js** y **Express** para administrar un listado de talleres técnicos. Desarrollado como práctica académica de backend para comprender el funcionamiento de las rutas y los métodos HTTP básicos.

---

### Rutas de la API (Endpoints) para Insomnia

| Método | Endpoint | ¿Qué hace? | ¿Lleva Body (JSON)? |
| :--- | :--- | :--- | :--- |
| **GET** | `http://localhost:3000/talleres` | Ver todos los talleres | No |
| **POST** | `http://localhost:3000/talleres` | Crear un taller nuevo | **Sí** (tema y duracion) |
| **PUT** | `http://localhost:3000/talleres/:id` | Editar un taller por su ID | **Sí** (tema y duracion) |
| **DELETE** | `http://localhost:3000/talleres/:id` | Eliminar un taller por su ID | No |

---

###  Cómo iniciar el servidor?

1. Instalar las dependencias (solo la primera vez):
   ```bash
   npm install

---

## 🛠️ Instalación y uso

1. Descarga o clona este repositorio en tu computadora.
2. Abre una terminal dentro de la carpeta del proyecto e instala las dependencias necesarias:
   ```bash
   npm install  
