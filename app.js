const express = require('express');
const app = express();

app.use(express.json());

// importamos el objeto completo y se extrae el array que esta en '.talleres'
const { infoTalleres } = require('./cursos.js');
const listaTalleres = infoTalleres.talleres; 

// ==========================================
// 1. LEER (GET) -> ver todos los talleres
// ==========================================
app.get('/talleres', (req, res) => {
    res.send(listaTalleres);
});

// ==========================================
// 2. CREAR (POST) -> Agregar un taller nuevo
// ==========================================
app.post('/talleres', (req, res) => {
    // se usa listaTalleres que si es el array y permite usar .length y .push
    const nuevoId = listaTalleres.length + 1;

    const nuevoTaller = {
        id: nuevoId,
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        nivel: req.body.nivel
    };
    
    listaTalleres.push(nuevoTaller);
    res.status(201).send(nuevoTaller);
});

// ==========================================
// 3. ACTUALIZAR (PUT) -> modificar un taller completo
// ==========================================
app.put('/talleres/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    const tallerEncontrado = listaTalleres.find(t => t.id === idBuscar);

    if (tallerEncontrado) {
        tallerEncontrado.titulo = req.body.titulo;
        tallerEncontrado.duracion = req.body.duracion;
        tallerEncontrado.nivel = req.body.nivel;
        
        res.send(tallerEncontrado);
    } else {
        res.status(404).send({ mensaje: "No se encontro el taller solicitado" });
    }
});

// ==========================================
// 4. ACTUALIZAR PARCIAL (PATCH) -> modificar solo algunas propiedades
// ==========================================
app.patch('/talleres/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    const tallerEncontrado = listaTalleres.find(t => t.id === idBuscar);

    if (!tallerEncontrado) {
        return res.status(404).send({ mensaje: "No se encontro el taller" });
    }

    if (req.body.titulo) {
        tallerEncontrado.titulo = req.body.titulo;
    }
    if (req.body.duracion) {
        tallerEncontrado.duracion = req.body.duracion;
    }
    if (req.body.nivel) {
        tallerEncontrado.nivel = req.body.nivel;
    }

    res.send(tallerEncontrado);
});

// ==========================================
// 5. ELIMINAR (DELETE) -> Borrar un taller por su ID
// ==========================================
app.delete('/talleres/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    const indice = listaTalleres.findIndex(t => t.id === idBuscar);
    
    if (indice !== -1) {
        listaTalleres.splice(indice, 1);
        res.send({ mensaje: "Taller eliminado correctamente" });
    } else {
        res.status(404).send({ mensaje: "No se encontro el taller solicitado" });
    }
});

// inicia servidor por aca
const PUERTO = 3001;
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});