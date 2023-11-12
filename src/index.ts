// Puerto  de entrada aplicación
// Llamar, Ejecutar y Compilar aplicación

import app from './server';
import config from './config/config';
import connect from './db/connect';

// HARD CODEAR no es buena praxis..creamos una configuración
// Creamos variable PORT..me traigo en que puerto estoy runeando
const PORT = config.app.PORT;

connect().then(() => {
    console.log('Connected to database!');

    // Queremos que el puerto escuche.
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}/`);
    });
});

