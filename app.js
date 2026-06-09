const express = require('express');
const app = express();

const {infoTalleres} = require('./cursos.js');

// ==========================================
// 1. CREAR (POST) -> agregamos un taller
// ==========================================
app.post('/talleres', (req, res) => {
    const nuevoTaller = {
        id: infoTalleres.length + 1,
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        nivel: req.body.nivel
    };
    
    infoTalleres.push(nuevoTaller);
    res.send(nuevoTaller);
});

// ==========================================
// 2. ELIMINAR (DELETE) -> borramos por ID
// ==========================================
app.delete('/talleres/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    
    infoTalleres = infoTalleres.filter(t => t.id !== idBuscar);
    
    res.send({ mensaje: "Taller eliminado correctamente" });
});

// ==========================================
// 3. ACTUALIZAR (PUT) -> modificamos un taller
// ==========================================
app.put('/talleres/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    const tallerEncontrado = infoTalleres.find(t => t.id === idBuscar);

    if (tallerEncontrado) {
        tallerEncontrado.titulo = req.body.titulo;
        tallerEncontrado.duracion = req.body.duracion;
        tallerEncontrado.nivel = req.body.nivel
        res.send(tallerEncontrado);
    } else {
        res.send({ mensaje: "No se encontró el taller solicitado" });
    }
});

// ==========================================
// 4. LEER (GET) -> mostramos la lista completa
// ==========================================
app.get('/talleres', (req, res) => {
    res.send(infoTalleres);
});

// iniciamos servidor por aca

const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});